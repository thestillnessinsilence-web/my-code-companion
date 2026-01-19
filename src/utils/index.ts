export function createPageUrl(pageName: string) {
  if (pageName.toLowerCase() === 'home') {
    return '/';
  }
  return '/' + pageName.replace(/ /g, '-').toLowerCase();
}
