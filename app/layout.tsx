import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, League_Spartan } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['300', '400', '500', '600', '700', '800']
});

const spartan = League_Spartan({
  subsets: ['latin'],
  variable: '--font-spartan',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Donatelli Digital',
  description:
    'Modern, custom websites delivered fast — without the delays, confusion, or technical headaches.'
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} ${spartan.variable} antialiased bg-black text-white`}
      >
        <SmoothScroll />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
