import { Metadata } from 'next/types'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from './(components)/Header/Header';
import Switcher from './(components)/Switcher/Switcher';

const inter = Inter({ subsets: ['latin'] })

export const metadata:Metadata = {
  title: 'Eleazar Udo',
  description: `Hi!
  I'm Eleazar Udo
  A full-stack web developer and software engineer
  I create websites and applications that are fast, responsive and user-friendly.`,
  icons: {
    icon: '/Logo.png',
    shortcut: '/Logo.png',
    apple: '/Logo.png'
  },
  twitter: {card: 'summary', site: '', title: 'Eleazar Udo', description: `Hi!
  I'm Eleazar Udo
  A full-stack web developer and software engineer
  I create websites and applications that are fast, responsive and user-friendly.`},

}

/*

<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@flickr" />
<meta name="twitter:title" content="Small Island Developing States Photo Submission" />
<meta name="twitter:description" content="View the album on Flickr." />
<meta name="twitter:image" content="https://farm6.staticflickr.com/5510/14338202952_93595258ff_z.jpg" />



*/



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       {/* title='Eleazar Udo' */}
      {/* <body className={`${inter.className}${' '}bg-white-800 dark:bg-black-800 text-black-400 dark:text-white-400 h-screen`}> */}
      <body className={`${inter.className}${' '}h-screen  subpixel-antialiased `}>
        <Header Switcher={Switcher}/>
        {children}
        
      </body>
    </html>
  )
}
