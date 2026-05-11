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
  openGraph: {
    title: 'Cronómetro de la Impunidad',
    description: 'Llevamos más de 200 días sin presupuesto universitario. ¡Sumate al reclamo!',
    url: 'https://contador-ajuste-universitario.vercel.app/',
    siteName: 'Juventud PTS - En Código Rojo',
    images: [
      {
        url: '/og-card.png', // Subí tu captura de pantalla a /public con este nombre
        width: 1196,
        height: 526,
        alt: 'Cronómetro de la Impunidad - Juventud PTS',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cronómetro de la Impunidad',
    description: 'Milei sigue sin aplicar la Ley de Financiamiento Universitario. ¡Entrá y hacé ruido!',
    images: ['/og-card.png'], // Misma imagen para X
    creator: '@alt_izq', // O la cuenta oficial que prefieras
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
