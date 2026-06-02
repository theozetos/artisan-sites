import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const GA_MEASUREMENT_ID = 'G-LR3H38KF9G';

const SITE_URL = 'https://demo.outboundempire.com';
const TITLE = 'Modèles de sites internet pour artisans — Outbound Empire';
const DESCRIPTION =
  'Trois modèles de sites internet pour artisans français — plombiers, chauffagistes, électriciens. Pensés pour transformer vos avis Google en demandes de devis et en rendez-vous.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s — Outbound Empire',
  },
  description: DESCRIPTION,
  applicationName: 'Outbound Empire',
  keywords: [
    'site internet artisan',
    'site internet plombier',
    'site internet chauffagiste',
    'site internet électricien',
    'site web artisan',
    'avis Google plombier',
    'prise de rendez-vous artisan',
    'Outbound Empire',
  ],
  authors: [{ name: 'Outbound Empire' }],
  creator: 'Outbound Empire',
  publisher: 'Outbound Empire',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    siteName: 'Outbound Empire',
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    locale: 'fr_FR',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Outbound Empire — Sites internet pour artisans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700;9..144,800&family=Inter+Tight:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,600;1,400;1,600&family=Geist+Mono:wght@400;500;700&family=Geist:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        {/* Google Analytics 4 — chargé après l'interaction utilisateur pour ne pas bloquer le rendu */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true
            });
          `}
        </Script>
      </body>
    </html>
  );
}
