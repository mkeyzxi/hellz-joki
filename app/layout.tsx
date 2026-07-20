import type {Metadata} from 'next'
import {Inter, Bebas_Neue} from 'next/font/google'
import './globals.css'
import {Navbar} from '@/components/navbar'
import {Footer} from '@/components/footer'
import {WhatsAppFloatButton} from '@/components/whatsapp-float-button'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const bebasNeue = Bebas_Neue({
  variable: '--font-bebas-neue',
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hellzjoki.com'),
  title: 'HellZ Joki | Jasa Joki Mobile Legends Terpercaya',
  description:
    'HellZ Joki menyediakan jasa push rank Mobile Legends dengan proses cepat, aman, terpercaya dan harga terjangkau.',
  keywords: ['Joki ML', 'Joki Mobile Legends', 'Push Rank ML', 'Jasa Joki Mythic', 'HellZ Joki'],
  openGraph: {
    title: 'HellZ Joki | Jasa Mobile Legends',
    description:
      'HellZ Joki menyediakan jasa push rank Mobile Legends dengan proses cepat, aman, terpercaya dan harga terjangkau.',
    url: 'https://hellzjoki.com',
    siteName: 'HellZ Joki',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
}

import {ThemeProvider} from '@/components/theme-provider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${bebasNeue.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-(--background) text-(--foreground) font-sans transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloatButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
