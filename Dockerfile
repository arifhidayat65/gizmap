FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Add Python and other build tools for node-gyp
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    libc6-compat \
    build-base \
    cairo-dev \
    jpeg-dev \
    pango-dev \
    giflib-dev

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
# Set Python path for node-gyp
ENV PYTHON=/usr/bin/python3
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects anonymous telemetry data about general usage
ENV NEXT_TELEMETRY_DISABLED 1

# Build with production optimizations
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Install curl for healthcheck and runtime dependencies
RUN apk add --no-cache \
    curl \
    cairo \
    jpeg \
    pango \
    giflib

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

# Expose port for direct access (though we'll use nginx)
EXPOSE 3000

ENV PORT 3000
# Listen on all network interfaces
ENV HOSTNAME "0.0.0.0"

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/ || exit 1

CMD ["node", "server.js"]
