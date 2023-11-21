import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local'
import { Suspense } from 'react'
import { FacebookPixelEvents } from '../components/pixel-events'
import StoreInitializer from './store-initializer';


const inter = Inter({ subsets: ['latin'] })
const montserrat = localFont({
  src: '../../public/montvar.ttf',
  display: 'swap',
  variable: '--font-montvar'

})
export const metadata: Metadata = {
  title: 'Mega Bundle By Brands Go Viral',
  description: 'Shine through the noise and grow your business having a must-have for all cosmetics brands and estheticians.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en" className={`${inter.className} ${montserrat.className}`}>

      <body>
      <StoreInitializer isVisible={false}/>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
{children} 

<Suspense fallback={null}>
          <FacebookPixelEvents />
        </Suspense>
<Analytics />

 </ThemeProvider>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/flowbite.min.js" async></script>
<script src="https://link.msgsndr.com/js/form_embed.js"></script>
 




</body>
    </html>
  )
}
