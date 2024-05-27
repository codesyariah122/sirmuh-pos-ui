const stringToSlug = (str) => {
  return str
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-')
  .replace(/-+/g, '-');
};

export default ({ app }, inject) => {
  inject("slug", stringToSlug);
};
