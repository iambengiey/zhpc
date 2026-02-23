export const DEFAULT_LANG = 'en';
export const ENABLED_LANGS = ['en', 'sn', 'nd'] as const;

export type Lang = (typeof ENABLED_LANGS)[number];
