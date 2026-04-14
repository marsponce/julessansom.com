// /src/app/layout.tsx
import type { Metadata } from 'next';
import { Header, Footer, Nav, Socials } from '@/components/layout';
import Paper from '@/assets/Paper';
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
      <body>
        <Paper />
        <Header>
          <Nav />
        </Header>
        <main>{children}</main>
        <Footer>
          <Socials />
        </Footer>
      </body>
    </html>
  );
}
