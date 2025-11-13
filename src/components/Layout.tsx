import type { FC, PropsWithChildren } from 'react'
import Header from './Header'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{
        background: '#0f171dff',
        color: '#cdcdcdff',
        fontFamily: 'Inter, sans-serif',
      }}
    >

      <Header />

      {/* Main Content */}
      <main 
        className="flex-grow"
        style={{
          padding: '0 10%',
        }}
      >
        {children}
      </main>
    </div>
  )
}

export default Layout