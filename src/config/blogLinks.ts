export type BlogLink = {
  title: string;
  url: string;
  date: string;
  lang: 'en' | 'sn' | 'nd';
  excerpt?: string;
};

export const BLOG_LINKS: BlogLink[] = [
  {
    title: 'Introducing the Zimbabwe Centre for High Performance Computing',
    url: 'https://zchpc.ac.zw/news/introducing-zchpc',
    date: '2026-02-01',
    lang: 'en',
    excerpt: 'Overview of national HPC services, priorities, and onboarding routes.'
  }
];
