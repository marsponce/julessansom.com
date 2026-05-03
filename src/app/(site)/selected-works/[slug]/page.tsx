// /app/(site)/selected-works/[slug]/page.tsx

import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getWorkBySlug, getWorksSlugs } from '@/lib/content';
import styles from './work.module.css';
import clsx from 'clsx';
import { getImageData } from '@/lib/images';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getWorksSlugs().map((slug) => ({ slug }));
}

export default async function Work({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  const { src, blurDataURL, width, height } = await getImageData(work.image);

  return (
    <>
      <article className={styles.work}>
        <figure className={clsx(styles.figure, styles.portrait)}>
          <div className={styles.spacer} />
          <Image
            src={src}
            alt={work.title}
            sizes="100vw"
            className={styles.image}
            loading="eager"
            width={width}
            height={height}
            priority
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
          <figcaption>
            <h1>{work.title}</h1>
            <MDXRemote source={work.content} />
          </figcaption>
        </figure>
      </article>
    </>
  );
}
