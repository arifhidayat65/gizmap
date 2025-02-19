import Link from 'next/link'
import Icon from '../Icon'

type IconName = 'arrow-left' | 'search' | 'view' | 'like' | 'chevron-down' | 'grid' | 'list'

interface ButtonBaseProps {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: IconName
  iconPosition?: 'left' | 'right'
}

interface ButtonProps extends ButtonBaseProps {
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

interface ButtonLinkProps extends ButtonBaseProps {
  href: string
}

const getVariantClasses = (variant: ButtonBaseProps['variant'] = 'primary', disabled: boolean = false) => {
  if (disabled) {
    return 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
  }

  switch (variant) {
    case 'primary':
      return 'bg-primary text-white hover:bg-primary/90 active:bg-primary/95'
    case 'secondary':
      return 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 active:bg-neutral-150'
    case 'ghost':
      return 'text-neutral-600 hover:text-primary hover:bg-neutral-100 active:bg-neutral-150'
    default:
      return 'bg-primary text-white hover:bg-primary/90 active:bg-primary/95'
  }
}

const getSizeClasses = (size: ButtonBaseProps['size'] = 'md') => {
  switch (size) {
    case 'sm':
      return 'px-3 py-1.5 text-sm'
    case 'md':
      return 'px-4 py-2'
    case 'lg':
      return 'px-6 py-3 text-lg'
    default:
      return 'px-4 py-2'
  }
}

const getIconClasses = (position: 'left' | 'right', size: ButtonBaseProps['size'] = 'md') => {
  const iconSize = size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'
  return `${iconSize} ${position === 'left' ? '-ml-1 mr-2' : '-mr-1 ml-2'}`
}

const ButtonContent = ({ 
  children, 
  icon, 
  iconPosition = 'left',
  size = 'md'
}: Pick<ButtonBaseProps, 'children' | 'icon' | 'iconPosition' | 'size'>) => {
  return (
    <>
      {icon && iconPosition === 'left' && (
        <Icon 
          name={icon} 
          className={getIconClasses('left', size)} 
        />
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <Icon 
          name={icon} 
          className={getIconClasses('right', size)} 
        />
      )}
    </>
  )
}

export const Button = ({ 
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20'
  const variantClasses = getVariantClasses(variant, disabled)
  const sizeClasses = getSizeClasses(size)

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
    >
      <ButtonContent icon={icon} iconPosition={iconPosition} size={size}>
        {children}
      </ButtonContent>
    </button>
  )
}

export const ButtonLink = ({ 
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  href
}: ButtonLinkProps) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20'
  const variantClasses = getVariantClasses(variant)
  const sizeClasses = getSizeClasses(size)

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
    >
      <ButtonContent icon={icon} iconPosition={iconPosition} size={size}>
        {children}
      </ButtonContent>
    </Link>
  )
}
