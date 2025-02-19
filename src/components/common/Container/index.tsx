import { ElementType } from 'react'

interface ContainerProps<T extends ElementType = 'div'> {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  as?: T
}

const getMaxWidthClass = (size: ContainerProps['size'] = 'lg') => {
  switch (size) {
    case 'sm':
      return 'max-w-3xl' // 768px
    case 'md':
      return 'max-w-4xl' // 896px
    case 'lg':
      return 'max-w-6xl' // 1152px
    case 'xl':
      return 'max-w-7xl' // 1280px
    default:
      return 'max-w-6xl'
  }
}

const Container = <T extends ElementType = 'div'>({
  children,
  className = '',
  size = 'lg',
  as
}: ContainerProps<T>) => {
  const Component = as || 'div'
  const maxWidthClass = getMaxWidthClass(size)

  return (
    <Component className={`w-full mx-auto px-4 sm:px-6 ${maxWidthClass} ${className}`}>
      {children}
    </Component>
  )
}

export default Container
