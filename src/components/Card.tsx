import type { FC, PropsWithChildren } from 'react'

interface CardProps extends PropsWithChildren {
  title?: string
  description?: string
  className?: string
  hover?: boolean
}

const Card: FC<CardProps> = ({
  title,
  description,
  className = '',
  hover = true,
  children,
}) => {
  const hoverStyles = hover
    ? 'hover:shadow-2xl hover:shadow-primary-900/50 hover:border-primary-600 hover:-translate-y-1'
    : ''

  return (
    <div
      className={`p-6 bg-secondary-800 border border-secondary-700 rounded-lg transition-all duration-300 ${hoverStyles} ${className}`}
      role="article"
    >
      {title && (
        <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-gray-400 text-sm mb-4">
          {description}
        </p>
      )}
      {children}
    </div>
  )
}

export default Card
