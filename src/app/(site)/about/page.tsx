// /src/app/(site)/about/page.tsx

import type { Metadata } from 'next';
import { getAbout } from '@/lib/content';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import styles from './About.module.css';
import { getImageData } from '@/lib/images';

export const metadata: Metadata = {
  title: 'About',
};

export default async function About() {
  const about = getAbout();
  const portrait = await getImageData(about.image);
  return (
    <>
      <article className={styles.about}>
        <figure>
          <Image
            src={portrait.src}
            alt={about.title ?? ''}
            width={portrait.width}
            height={portrait.height}
            sizes="(min-width: 768px) 40vw, 100vw"
            placeholder="blur"
            blurDataURL={portrait.blurDataURL}
            preload={true}
          />
        </figure>
        <div className={styles.content}>
          <MDXRemote source={about.content} />
        </div>
      </article>
    </>
  );
}
