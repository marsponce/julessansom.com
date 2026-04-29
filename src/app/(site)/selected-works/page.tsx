// /src/app/(site)/selected-works/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Selected Works',
};

import Image from 'next/image';
import Link from 'next/link';
import { getAllWorks } from '@/lib/content';
import styles from './selected-works.module.css';

export default function SelectedWorks() {
  const works = getAllWorks();

  return (
    <div className={styles.gallery}>
      {works.map((work) => (
        <Link key={work.slug} href={`/selected-works/${work.slug}`} prefetch>
          <Image
            src={work.image}
            alt={work.title}
            width={0}
            height={0}
            sizes="(max-width: 320px) 100vw, (max-width: 768px) 50vw, 33vw"
            preload={true}
          />
        </Link>
      ))}
    </div>
  );
}
