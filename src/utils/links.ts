import { ENABLED_LANGS, type Lang } from '../i18n/languages';

const KNOWN_PATHS = new Set([
  '',
  'get-access',
  'docs',
  'status',
  'support',
  'blog',
  'policies',
  'policies/privacy',
  'policies/data',
  'policies/aup',
  'accessibility',
  'contact',
]);

export function withBase(pathname: string) {
  const base = import.meta.env.BASE_URL || '/';
  const normalisedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const normalisedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${normalisedBase}${normalisedPath}`.replace(/^$/, '/');
}

export function swapLang(pathname: string, targetLang: Lang) {
  const segments = pathname.split('/').filter(Boolean);
  if (!segments.length || !ENABLED_LANGS.includes(segments[0] as Lang)) {
    return `/${targetLang}/`;
  }

  const suffix = segments.slice(1).join('/');
  if (!KNOWN_PATHS.has(suffix)) {
    return `/${targetLang}/`;
  }

  const trailingSlash = pathname.endsWith('/') ? '/' : '';
  return `/${targetLang}${suffix ? `/${suffix}` : '/'}${trailingSlash === '/' && suffix ? '/' : ''}`;
}
