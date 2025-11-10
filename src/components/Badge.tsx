import type { FC } from 'react'

interface BadgeProps {
  label: string
  variant?: 'default' | 'primary' | 'success' | 'warning'
  className?: string
}

const Badge: FC<BadgeProps> = ({
  label,
  variant = 'default',
  className = '',
}) => {
  const variantStyles = {
    default: 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white',
    primary: 'bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100',
    success: 'bg-green-100 text-green-900 dark:bg-green-900 dark:text-green-100',
    warning: 'bg-yellow-100 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-100',
  }

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${variantStyles[variant]} ${className}`}
    >
      {label}
    </span>
  )
}

export default Badge
