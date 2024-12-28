import type { Metadata } from 'next';
import { Rokkitt } from 'next/font/google';
import './globals.css';

const Rokkit = Rokkitt({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KHOMKIT 66022444',
  description: 'Portfolio ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Rokkit.className}>{children}</body>
    </html>
  );
}
