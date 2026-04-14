// /src/app/(site)/layout.tsx
import { Header, Footer, Nav, Socials } from '@/components/layout';

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <main>{children}</main>
      <Footer>
        <Socials />
      </Footer>
    </>
  );
}
