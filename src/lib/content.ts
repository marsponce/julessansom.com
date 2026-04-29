// /src/lib/content.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');

function getSlugs(collection: string): string[] {
  return fs
    .readdirSync(path.join(contentDir, collection))
    .map((f) => f.replace(/\.md$/, ''));
}

function getBySlug<T>(collection: string, slug: string): T {
  const raw = fs.readFileSync(
    path.join(contentDir, collection, `${slug}.md`),
    'utf-8'
  );
  const { data, content } = matter(raw);
  return { slug, ...data, content } as T;
}

function getAll<T>(collection: string): T[] {
  return getSlugs(collection).map((slug) => getBySlug<T>(collection, slug));
}

function getSingleton<T>(filename: string): T {
  const raw = fs.readFileSync(path.join(contentDir, filename), 'utf-8');
  const { data, content } = matter(raw);
  return { ...data, content } as T;
}

export type AboutPage = {
  image: string;
  title?: string;
  content: string; // markdown body
};

export type WorksItem = {
  slug: string;
  title: string;
  image: string;
  content: string; // the `description` markdown field from frontmatter becomes content after parsing
};

export const getAbout = () => getSingleton<AboutPage>('about.md');

export const getAllWorks = () => getAll<WorksItem>('selected-works');
export const getWorkBySlug = (slug: string) =>
  getBySlug<WorksItem>('selected-works', slug);
export const getWorksSlugs = () => getSlugs('selected-works');
