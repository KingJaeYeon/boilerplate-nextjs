export default function shortText(text: string, maxLine: number) {
  // test12121 -> test....
  if (text.length > maxLine) {
    return text.slice(0, maxLine) + "...";
  }
  return text;
}
