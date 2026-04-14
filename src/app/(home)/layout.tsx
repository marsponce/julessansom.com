// /src/app/(home)/layout.tsx;
import { Header, Footer, Nav, Socials } from '@/components/layout';

export default function IndexLayout({
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
