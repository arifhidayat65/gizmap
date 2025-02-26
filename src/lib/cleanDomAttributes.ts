'use client'

export function cleanDomAttributes() {
  if (typeof window !== 'undefined') {
    const elements = document.querySelectorAll('*')
    elements.forEach(el => {
      Array.from(el.attributes).forEach(attr => {
        if (attr.name.includes('bis_') || 
            attr.name.includes('__processed_') ||
            attr.name.includes('register')) {
          el.removeAttribute(attr.name)
        }
      })
    })
  }
}
