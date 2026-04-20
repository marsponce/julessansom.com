// /src/components/contact/Contact.tsx
'use client';
import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const params = new URLSearchParams();
    new FormData(form).forEach((value, key) => {
      if (typeof value === 'string') params.append(key, value);
    });

    await fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });
    setSubmitted(true);
    console.debug('Contact form submission:', params.toString());
  };

  return (
    <div className={styles.contact}>
      <div className={styles.spacer} />
      {!submitted ? (
        <form name="contact" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              id={styles.name}
              placeholder={' '}
              required
            />
            <label id="name">Name</label>
          </div>

          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              id={styles.email}
              placeholder={' '}
              required
            />
            <label id="email">Email</label>
          </div>

          <div className={styles.formGroup}>
            <textarea
              name="message"
              id={styles.message}
              placeholder={' '}
              required
            />
            <label id={styles.message}>Message</label>
          </div>
          <input type="submit" value="Submit" />
        </form>
      ) : (
        <p className={styles.successMessage}>
          Message Received. I&apos;ll be in touch soon!
        </p>
      )}
      <div className={styles.spacer} />
    </div>
  );
}
