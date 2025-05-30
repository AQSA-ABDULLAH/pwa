import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
 title: 'My PWA App',
  description: 'A Progressive Web App built with Next.js',
  themeColor: '#000000',
  icons: {
    icon: '/images.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
