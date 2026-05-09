import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { kuunari } from './fonts'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: '¡NO AL AJUSTE UNIVERSITARIO!',
  description: 'Llevamos días sin cumplimiento de la Ley de Financiamiento Universitario. El ajuste nos roba el futuro.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/EnCodigoRojo-icono1.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/EnCodigoRojo-icono1.svg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/EnCodigoRojo-icono1.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/EnCodigoRojo-icono1.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${kuunari.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
