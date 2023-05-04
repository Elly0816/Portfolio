import { Metadata } from 'next/types'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from './(components)/Header/Header';
import Switcher from './(components)/Switcher/Switcher';

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
       {/* title='Eleazar Udo' */}
      {/* <body className={`${inter.className}${' '}bg-white-800 dark:bg-black-800 text-black-400 dark:text-white-400 h-screen`}> */}
      <body className={`${inter.className}${' '}h-screen`}>
        <Header Switcher={Switcher}/>
        {children}
        
      </body>
    </html>
  )
}
