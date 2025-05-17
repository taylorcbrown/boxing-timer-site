/**
 * SEO utility functions for consistent title and meta tags across the site
 */

export const SITE_NAME = 'Boxing Timer Champ';

/**
 * Formats a page title with the site name appended
 * @param pageTitle The page-specific title
 * @param options Configuration options
 * @returns Formatted title string
 */
export function formatTitle(pageTitle: string, options: { isHomepage?: boolean, separator?: string } = {}) {
  const { isHomepage = false, separator = ' - ' } = options;
  
  // For homepage, just return the site name
  if (isHomepage) {
    return SITE_NAME;
  }
  
  // For other pages, append the site name
  // If the title already contains the site name, don't duplicate it
  if (pageTitle.includes(SITE_NAME)) {
    return pageTitle;
  }
  
  return `${pageTitle}${separator}${SITE_NAME}`;
}
