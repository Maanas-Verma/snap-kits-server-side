import type { Metadata } from 'next';
import '../styles/globals.css';
import { IBM_Plex_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ClerkProvider } from '@clerk/nextjs';

const IBMPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex',
});

export const metadata: Metadata = {
  title: 'SnapKits',
  description: 'App to manage your billing and finance management',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{}}>
      <html lang='en' className='dark scroll-smooth bg-black'>
        <body
          suppressHydrationWarning={true}
          className={cn('font-IBMPlex antialiased', IBMPlex.variable)}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
