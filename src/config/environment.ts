export const environment = {
  production: process.env.NODE_ENV === 'production',
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
  escuelaJsApi: process.env.NEXT_PUBLIC_ESCUELAJS_API_URL || 'https://api.escuelajs.co/api/v1',
  googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
};

// API endpoints configuration
export const API_CONFIG = {
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
    register: '/auth/register',
    profile: '/auth/profile',
  },
  user: {
    profile: '/user/profile',
    update: '/user/update',
  },
  products: {
    list: '/products',
    detail: (id: number) => `/products/${id}`,
  },
  categories: {
    list: '/categories',
    detail: (id: number) => `/categories/${id}`,
  },
  users: {
    list: '/users',
    detail: (id: number) => `/users/${id}`,
  },
};
