import Script from 'next/script'
import './globals.css'

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Alexkpot Links',
  description:
    'Developer, photographer, content creator. Find all my recommended products, setups, and links.',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/AlexKpot-Logo.png',
    apple: '/AlexKpot-Logo.png',
  },
  openGraph: {
    title: 'Alexkpot Links',
    description:
      'Developer, photographer, content creator. Find all my recommended products, setups, and links.',
    url: '/',
    type: 'website',
    images: ['/AlexKpot-Logo.png'],
  },
  twitter: {
    card: 'summary',
    title: 'Alexkpot Links',
    description:
      'Developer, photographer, content creator. Find all my recommended products, setups, and links.',
    images: ['/AlexKpot-Logo.png'],
  },
}

export const viewport = {
  themeColor: '#000000',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://use.typekit.net' crossOrigin='' />
        <link rel='stylesheet' href='https://use.typekit.net/wcy5vmq.css' />
      </head>
      <body>
        <div className='main_container'>{children}</div>
        <Script
          src='https://kit.fontawesome.com/ef315dfc26.js'
          crossOrigin='anonymous'
          strategy='afterInteractive'
        />
        <Script
          defer
          data-domain='kitlink.app'
          src='https://plausible.io/js/script.outbound-links.js'
          strategy='afterInteractive'
        />
      </body>
    </html>
  )
}
