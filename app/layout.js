import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My PWA App',
  description: 'A Progressive Web App built with Next.js',
  themeColor: '#000000',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/images.png', sizes: '192x192', type: 'image/png' }
    ],
    apple: [
      { url: '/image.png', sizes: '512x512', type: 'image/png' }
    ]
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Android / General */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />

        {/* iOS Specific */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="My PWA App" />
        <link rel="apple-touch-icon" href="/image.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

