// Spaced Repetition Schedule (Anki-like intervals)
// Returns the next review date (ISO date string) given current review_count.
const INTERVALS_DAYS = [1, 3, 7, 14, 30];

export function getNextReviewDate(reviewCount = 0) {
  const idx = Math.min(reviewCount, INTERVALS_DAYS.length - 1);
  const days = INTERVALS_DAYS[idx];
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

export function getIntervalLabel(reviewCount, lang) {
  if (reviewCount === 0) return lang === 'ar' ? 'للمراجعة اليوم' : 'Review today';
  const idx = Math.min(reviewCount - 1, INTERVALS_DAYS.length - 1);
  const days = INTERVALS_DAYS[idx];
  return lang === 'ar' ? `بعد ${days} أيام` : `in ${days} days`;
}