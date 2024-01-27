export const PAGE_LINK = 'page'
export const SOCIAL_LINK = 'social'
export const OTHER_LINK = 'others'

export const LINKS = [
  /* ---------- PAGES ---------- */
  {
    to: '/',
    title: 'Home',
    type: PAGE_LINK,
  },
  {
    to: '/our-vision',
    title: 'Our Vision',
    type: PAGE_LINK,
  },
  {
    to: '/projects',
    title: 'Projects',
    type: PAGE_LINK,
  },
  {
    to: '/services',
    title: 'Services',
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