import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const url = (process.env.VERCEL_URL != null) ? 'https://wilsotoa.vercel.app/' : 'http://localhost:3000/'

export const metadata: Metadata = {
  title: 'Wilmer S. 😎 | Full Stack Developer 🇨🇴',
  description: 'Creative developer living in Colombia, focused on Back-end, with skills in React, Redux, JavaScript, PHP, NodeJS, and more.',
  keywords: ['Next.js', 'React', 'JavaScript', 'TypeScript', 'Developer', 'Portflio', 'Wilmer', 'Wilmer S.', 'WilSotoA', 'Desarrollador'],
  authors: [{ name: 'WilSotoA' }],
  colorScheme: 'dark',
  creator: 'WilSotoA',
  publisher: 'WilSotoA',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png']
  },
  openGraph: {
    title: 'Wilmer S. Portfolio | Full Stack Developer',
    description: 'Creative developer living in Colombia, focused on Back-end, with skills in React, Redux, JavaScript, PHP, NodeJS, and more.',
    siteName: 'Portafolio Wilmer S Full Stack Developer',
    images: [
      {
        url: `${url}portflio.png`,
        width: 800,
        height: 600,
        alt: 'Portafolio Wilmer S Full Stack Developer'
      }
    ]
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL(url)
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
