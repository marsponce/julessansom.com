// /src/app/layout.tsx
import type { Metadata } from 'next';
import { Header, Footer, Nav, Socials } from '@/components/layout';
import clsx from 'clsx';
import '@/styles/globals.css';
import styles from './layout.module.css';

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
      <body className={clsx(styles.layout)}>
        <div className={styles.paperOverlay} />
        <Header>
          <Nav>
            <Socials />
          </Nav>
        </Header>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
