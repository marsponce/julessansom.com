// /src/app/(site)/contact/page.tsx

import type { Metadata } from 'next';
import Contact from '@/components/contact/Contact';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function Index() {
  return (
    <main>
      <h1>Contact</h1>
      <Contact />
    </main>
  );
}
