export function CategoryTitle(category) {
  return category
    .replace("-", " ")
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
