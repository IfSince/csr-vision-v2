export const PAGE_LINK = 'page'
export const SOCIAL_LINK = 'social'
export const OTHER_LINK = 'others'

export const LINKS = [
  /* ---------- PAGES ---------- */
  {
    to: '/',
    base: '',
    title: 'Home',
    type: PAGE_LINK,
  },
  {
    to: '/our-vision',
    base: 'our-vision',
    title: 'Our Vision',
    type: PAGE_LINK,
  },
  {
    to: '/services',
    base: 'services',
    title: 'Services',
    type: PAGE_LINK,
  },
  {
    to: '/projects',
    base: 'projects',
    title: 'Projects',
    type: PAGE_LINK,
  },
  {
    to: '/our-team',
    base: 'our-team',
    title: 'Our Team',
    type: PAGE_LINK,
  },
  {
    to: '/blog',
    base: 'blog',
    title: 'Blog',
    type: PAGE_LINK,
  },
  {
    to: '/contact',
    base: 'contact',
    title: 'Contact',
    type: PAGE_LINK,
  },

  /* ---------- Socials ---------- */
  {
    to: '/',
    title: 'LinkedIn',
    type: SOCIAL_LINK,
  },

  /* ---------- Others ---------- */
  {
    to: '/press',
    title: 'Presse',
    type: OTHER_LINK,
  },
  {
    to: '/imprint',
    title: 'Impressum',
    type: OTHER_LINK,
  },
  {
    to: '/privacy',
    title: 'Datenschutz',
    type: OTHER_LINK,
  },
]

export const getPageLinks = () => LINKS.filter(link => link.type === PAGE_LINK)
export const getSocialLinks = () => LINKS.filter(link => link.type === SOCIAL_LINK)
export const getOtherLinks = () => LINKS.filter(link => link.type === OTHER_LINK)

export const getNextPageUrl = (currentUrl = '/') => {
  const baseUrl = currentUrl.split('/').filter(part => part !== '')[0] ?? ''
  const currentIndex = LINKS.findIndex(it => it.base === baseUrl)

  if (currentIndex === -1) {
    return getPageLinks().find(link => link.base === 'projects')
  }

  return getPageLinks()[(currentIndex + 1)] ?? getPageLinks().find(link => link.base === 'projects')
}