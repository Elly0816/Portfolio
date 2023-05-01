import { Metadata } from 'next/types'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from './(components)/Header/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata:Metadata = {
  title: 'Eleazar Udo Portfolio',
  description: "Welcome to Eleazar Udo's portfolio website",
  icons: {
    icon: '/Logo.png',
    shortcut: '/Logo.png',
    apple: '/Logo.png'
  }
}




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        
      </body>
    </html>
  )
}
