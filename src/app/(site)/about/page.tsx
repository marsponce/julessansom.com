// /src/app/(site)/about/page.tsx

import type { Metadata } from 'next';
import { getAbout } from '@/lib/content';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import styles from './About.module.css';

export const metadata: Metadata = {
  title: 'About',
};

export default function About() {
  const about = getAbout();
  return (
    <>
      <div className={styles.about}>
        <div className={styles.frame}>
          <Image
            src={about.image}
            alt={about.title ?? ''}
            fill
            style={{ objectFit: 'cover' }}
            preload={true}
          />
        </div>
        <div>
          <MDXRemote source={about.content} />
        </div>
      </div>
    </>
  );
}
