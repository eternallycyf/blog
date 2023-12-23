import 'server-only';
import type { Locale } from '@/i18n-config';

const dictionaries = {
  zh: () => import('./zh.json').then((module) => module.default),
  en: () => import('./en.json').then((module) => module.default),
};

export const getLocale = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
