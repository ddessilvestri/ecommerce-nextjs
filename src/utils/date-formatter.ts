/**
 * Formats a date into a localized string based on user's locale
 * @param date - The date to format
 * @param locale - Optional locale (defaults to user's locale)
 * @returns Formatted date string
 */
export function formatDate(date: Date, locale?: string): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

/**
 * Returns a relative time string (e.g., "2 hours ago", "in 3 days")
 * @param date - The date to compare against now
 * @param locale - Optional locale (defaults to user's locale)
 * @returns Relative time string
 */
export function getRelativeTime(date: Date, locale?: string): string {
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
  const now = new Date();
  const diff = date.getTime() - now.getTime();
  
  const diffInSeconds = diff / 1000;
  const diffInMinutes = diffInSeconds / 60;
  const diffInHours = diffInMinutes / 60;
  const diffInDays = diffInHours / 24;

  if (Math.abs(diffInDays) >= 1) {
    return rtf.format(Math.round(diffInDays), 'day');
  }
  if (Math.abs(diffInHours) >= 1) {
    return rtf.format(Math.round(diffInHours), 'hour');
  }
  if (Math.abs(diffInMinutes) >= 1) {
    return rtf.format(Math.round(diffInMinutes), 'minute');
  }
  return rtf.format(Math.round(diffInSeconds), 'second');
}