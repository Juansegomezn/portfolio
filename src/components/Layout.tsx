import type { FC, PropsWithChildren } from 'react'
import Header from './Header'
import Navigation from './Navigation'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{
        background: 'linear-gradient(135deg, #0d0d0d 0%, #1f1f1f 100%)',
      }}
    >
      {/* Navigation - Fixed Right Side */}
      <Navigation />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>
    </div>
  )
}

export default Layout