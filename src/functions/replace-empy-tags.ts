export const replaceEmptyTags = (str: string) => {
  const res = str.replace(/<[^>]*?>\s*<\/[^>]*?>/gim, "");
  return res;
};
