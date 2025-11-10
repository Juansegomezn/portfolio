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
  const hoverStyles = hover ? 'hover:shadow-lg transition-shadow' : ''

  return (
    <div
      className={`p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 ${hoverStyles} ${className}`}
      role="article"
    >
      {title && (
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {description}
        </p>
      )}
      {children}
    </div>
  )
}

export default Card
