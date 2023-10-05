const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export function CurrencyFormatter(number) {
  if (number === undefined) return "...";
  return CURRENCY_FORMATTER.format(number);
}
