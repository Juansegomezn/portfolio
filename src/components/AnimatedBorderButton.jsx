export const AnimatedBorderButton = ({ children, href, download, ...props }) => {
  return (
    <a 
      href={href} 
      download={download}
      {...props}
      className="relative inline-flex items-center justify-center bg-transparent border border-border text-foreground hover:border-primary/50 transition-all duration-1000 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 group px-8 py-4 text-lg font-medium rounded-full overflow-visible cursor-pointer animated-border"
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ overflow: "visible" }}
      >
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          rx="30"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="400 600"
          strokeDashoffset="400"
          strokeLinecap="round"
          className="animated-border-path transition-all duration-500 group-hover:stroke-dashoffset-0"
          style={{ vectorEffect: 'non-scaling-stroke' }} 
        />
      </svg>

      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </a>
  )
}