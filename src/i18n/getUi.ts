import type { Lang } from './languages';

const UI_IMPORTERS = {
  en: () => import('./ui.en.json'),
  sn: () => import('./ui.sn.json'),
  nd: () => import('./ui.nd.json'),
} as const;

export async function getUi(lang: Lang) {
  const uiModule = await UI_IMPORTERS[lang]();
  return uiModule.default;
}
