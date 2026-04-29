// /app/(site)/selected-works/[slug]/page.tsx

import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getWorkBySlug, getWorksSlugs } from '@/lib/content';
import styles from './work.module.css';
import clsx from 'clsx';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getWorksSlugs().map((slug) => ({ slug }));
}

export default async function Work({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  return (
    <>
      <article className={styles.work}>
        <figure className={clsx(styles.figure, styles.portrait)}>
          <div className={styles.frame}>
            <Image
              src={work.image}
              alt={work.title}
              fill
              sizes="100vw"
              className={styles.image}
              loading="eager"
              priority
            />
          </div>
          <figcaption>
            <h1>{work.title}</h1>
            <MDXRemote source={work.content} />
          </figcaption>
        </figure>
      </article>
    </>
  );
}
