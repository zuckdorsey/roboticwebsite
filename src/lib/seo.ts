const DEFAULT_SITE_URL = 'https://robotics.polibatam.ac.id';

/**
 * Returns the canonical site URL without a trailing slash.
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL;
  return raw.replace(/\/$/, '');
}

/**
 * Converts a relative path to an absolute URL using the configured site URL.
 */
export function buildAbsoluteUrl(path: string): string {
  if (!path) {
    return getSiteUrl();
  }

  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalisedPath = path.startsWith('/') ? path : `/${path}`;
  return `${getSiteUrl()}${normalisedPath}`;
}

/**
 * Returns an ISO-8601 string for a given Date-like value.
 */
export function toIsoString(date: Date | string): string {
  if (date instanceof Date) {
    return date.toISOString();
  }

  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? new Date().toISOString() : parsed.toISOString();
}
