// Facts used on every page. Each one lives here only.

export const email = 'gokulr5102@gmail.com';

export const profiles = {
  linkedIn: 'https://www.linkedin.com/in/gokul-ramanan1',
  gitHub: 'https://github.com/gokul5102',
} as const;

/** The downloadable Résumé. Ticket 11 adds the file. */
export const resumePdf = '/resume.pdf';

/** Header sections, in order. `href` is also the route prefix that marks the section as current. */
export const sections = [
  { id: 'work', label: 'Work', href: '/work' },
  { id: 'notes', label: 'Notes', href: '/notes' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'resume', label: 'Résumé', href: '/resume' },
] as const;

export type SectionId = (typeof sections)[number]['id'];
