const WORDS_PER_MINUTE = 200;

export function estimateReadingTime(html: string): number {
  const text = html
    .replace(/<[^>]*>/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

  const wordCount = text ? text.split(" ").length : 0;
  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
}
