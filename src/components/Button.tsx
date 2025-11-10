import type { FC, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  children: React.ReactNode
}

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary-800 focus:ring-primary-500'

  const variantStyles = {
    primary: 'bg-gradient-blue text-white hover:shadow-lg hover:shadow-primary-600/50 disabled:opacity-50',
    secondary: 'bg-secondary-700 text-gray-100 hover:bg-secondary-600 border border-secondary-600 disabled:opacity-50',
    outline: 'border border-primary-600 text-primary-400 hover:bg-primary-900/20 hover:border-primary-500 disabled:opacity-50',
  }

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const disabledStyles = disabled || isLoading ? 'cursor-not-allowed opacity-60' : ''

  return (
    <button
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <span className="animate-spin">⌛</span>
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
