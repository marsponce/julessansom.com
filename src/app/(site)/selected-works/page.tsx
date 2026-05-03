// /src/app/(site)/selected-works/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Selected Works',
};

import Image from 'next/image';
import Link from 'next/link';
import { getAllWorks } from '@/lib/content';
import styles from './selected-works.module.css';

import { getImageData } from '@/lib/images';

export default async function SelectedWorks() {
  const works = getAllWorks();

  const images = await Promise.all(
    works.map((work) => getImageData(work.image))
  );

  return (
    <div className={styles.gallery}>
      {works.map((work, i) => (
        <Link key={work.slug} href={`/selected-works/${work.slug}`} prefetch>
          <Image
            src={images[i].src}
            alt={work.title}
            width={images[i].width}
            height={images[i].height}
            sizes="(max-width: 320px) 100vw, (max-width: 768px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL={images[i].blurDataURL}
            quality={70}
          />
        </Link>
      ))}
    </div>
  );
}
