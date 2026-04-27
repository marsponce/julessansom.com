// /src/app/(site)/contact/page.tsx

import type { Metadata } from 'next';
import Contact from '@/components/contact/Contact';
import styles from './Contact.module.css';

export const metadata: Metadata = {
  title: 'Contact',
};

function ContactText() {
  return (
    <div className={styles.contactText}>
      <h1>
        <span className={styles.contactTitle}>CONTACT</span>{' '}
        <span className={styles.contactMe}>ME</span>
      </h1>
      <p>
        Want to work with me? <br />
        Let&apos;s get in touch and figure it out!
      </p>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className={styles.contact}>
      <div className={styles.spacer} />
      <ContactText />
      <Contact className={styles.contactForm} />
      <div className={styles.spacer} />
    </div>
  );
}
