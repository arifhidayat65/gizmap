'use client'

import { useEffect, useRef } from 'react'

interface PostContentProps {
  content: string
  className?: string
}

const PostContent = ({ content, className = '' }: PostContentProps) => {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Add copy button to code blocks
    const addCopyButtons = () => {
      const codeBlocks = contentRef.current?.querySelectorAll('pre')
      if (!codeBlocks) return

      codeBlocks.forEach((block) => {
        // Skip if already has copy button
        if (block.querySelector('.copy-code-button')) return

        const button = document.createElement('button')
        button.className = 'copy-code-button absolute top-2 right-2 px-2 py-1 text-sm bg-white/10 text-white/80 rounded hover:bg-white/20 transition-colors'
        button.innerHTML = 'Copy'
        
        button.addEventListener('click', async () => {
          const code = block.querySelector('code')
          if (!code) return

          try {
            await navigator.clipboard.writeText(code.textContent || '')
            button.innerHTML = 'Copied!'
            setTimeout(() => {
              button.innerHTML = 'Copy'
            }, 2000)
          } catch (err) {
            console.error('Failed to copy:', err)
            button.innerHTML = 'Failed'
          }
        })

        block.style.position = 'relative'
        block.appendChild(button)
      })
    }

    addCopyButtons()
  }, [content])

  return (
    <div 
      ref={contentRef}
      className={`
        prose prose-lg max-w-none
        prose-headings:scroll-mt-20
        prose-h2:text-2xl prose-h2:font-bold prose-h2:text-neutral-900
        prose-h3:text-xl prose-h3:font-semibold prose-h3:text-neutral-800
        prose-p:text-neutral-700
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
        prose-strong:text-neutral-900
        prose-code:text-primary prose-code:bg-neutral-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md
        prose-pre:bg-neutral-900 prose-pre:text-neutral-100 prose-pre:rounded-lg prose-pre:p-4
        prose-pre:relative prose-pre:overflow-hidden
        prose-img:rounded-lg
        ${className}
      `}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default PostContent

// Add to globals.css
/*
.copy-code-button {
  opacity: 0;
  transition: opacity 0.2s;
}

pre:hover .copy-code-button {
  opacity: 1;
}

.copy-code-button:focus {
  opacity: 1;
}
*/
