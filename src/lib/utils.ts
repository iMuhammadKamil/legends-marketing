export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-");
}

export function formatCurrency(
  amount: number,
  currency = "PKR",
  locale = "en-PK"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function truncate(text: string, length = 120): string {
  if (text.length <= length) return text;
  return `${text.slice(0, length)}...`;
}

export function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(" ");
}