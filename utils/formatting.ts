export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const formatterDay = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
  });
  return formatterDay.format(date).replace(/^\w/, (c) => c.toUpperCase());
}
