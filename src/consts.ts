export const SITE_URL = "https://gamujournal.gamublocks.com";
export const PARENT_BRAND_URL = "https://www.gamublocks.com";

export const STORE_URLS = {
  googlePlay: "https://play.google.com/store/apps/details?id=com.gamublocks.gamujournal",
  appStore: "https://apps.apple.com/us/app/gamu-journal-private-diary/id6759192253",
} as const;

export const APP_IDS = {
  android: "com.gamublocks.gamujournal",
  appStore: "6759192253",
} as const;

export type LocaleKey = "en" | "ja" | "pt-br" | "ru" | "fr" | "es" | "ko";

export const LOCALES: { key: LocaleKey; copyKey: string; label: string; htmlLang: string }[] = [
  { key: "en", copyKey: "en", label: "English", htmlLang: "en" },
  { key: "ja", copyKey: "ja", label: "日本語", htmlLang: "ja" },
  { key: "pt-br", copyKey: "pt_BR", label: "Português (Brasil)", htmlLang: "pt-BR" },
  { key: "ru", copyKey: "ru", label: "Русский", htmlLang: "ru" },
  { key: "fr", copyKey: "fr", label: "Français", htmlLang: "fr" },
  { key: "es", copyKey: "es", label: "Español", htmlLang: "es" },
  { key: "ko", copyKey: "ko", label: "한국어", htmlLang: "ko" },
];

export const DEFAULT_LOCALE: LocaleKey = "en";

export function localeUrl(locale: LocaleKey, path: string = ""): string {
  const cleanPath = path.replace(/^\/+/, "");
  if (locale === DEFAULT_LOCALE) {
    return `${SITE_URL}/${cleanPath}`;
  }
  return `${SITE_URL}/${locale}/${cleanPath}`;
}

export function localePath(locale: LocaleKey): string {
  return locale === DEFAULT_LOCALE ? "/" : `/${locale}/`;
}
