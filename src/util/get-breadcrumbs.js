export const getBreadcrumbs = path =>
  path.split('/').filter(Boolean).map((segment, index, array) => ({
    label: segment.replace(/-/g, ' '),
    to: `/${ array.slice(0, index + 1).join('/') }`,
  }))