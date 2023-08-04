import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wilmer S. 😎 | Full Stack Developer 🇨🇴',
  description: 'Creative developer living in Colombia, focused in Back-end, with skills in React, Redux, JavaScript, PHP, NodeJS, and others.',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png']
  },
  openGraph: {
    title: 'Wilmer S. Portflio | Full Stack Developer',
    description: 'Creative developer living in Colombia, focused in Back-end, with skills in React, Redux, JavaScript, PHP, NodeJS, and others.'
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
