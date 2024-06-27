import '../styles/globals.css'

import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio w stylu retro',
}

export default function RootLayout({children}){
  return (
    <html>
      
      <body className="font-retro bg-retroBeige">
      <Header />
        {children}
      <Footer />
      </body>
      
    </html>
  )
}
