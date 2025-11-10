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
    default: 'bg-secondary-700 text-gray-300 border border-secondary-600',
    primary: 'bg-primary-900/50 text-primary-300 border border-primary-700',
    success: 'bg-emerald-900/50 text-emerald-300 border border-emerald-700',
    warning: 'bg-amber-900/50 text-amber-300 border border-amber-700',
  }

  return (
    <span
      className={`inline-block px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${variantStyles[variant]} ${className}`}
    >
      {label}
    </span>
  )
}

export default Badge
