import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s - Jules Sansom',
    default: 'Jules Sansom',
  },
  description: "Jules Sansom's artist site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
