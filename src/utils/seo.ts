/**
 * SEO utility functions for consistent title and meta tags across the site
 */

export const SITE_NAME = 'Boxing Timer Champ';

/**
 * SEO configuration interface
 */
export interface SEOConfig {
  // Whether to use raw title without appending site name
  useRawTitle?: boolean;
  // Whether this is the homepage
  isHomepage?: boolean;
  // Custom separator between page title and site name
  separator?: string;
  // Force a specific title (overrides all other options)
  forceTitle?: string;
}

/**
 * Formats a page title with the site name appended
 * @param pageTitle The page-specific title
 * @param options Configuration options
 * @returns Formatted title string
 */
export function formatTitle(pageTitle: string, options: SEOConfig = {}) {
  const { 
    useRawTitle = false, 
    isHomepage = false, 
    separator = ' - ',
    forceTitle = null
  } = options;
  
  // If a forced title is provided, use it directly
  if (forceTitle) {
    return forceTitle;
  }
  
  // For homepage, use the exact title provided
  if (isHomepage) {
    return pageTitle;
  }
  
  // If raw title is requested or title already contains site name, don't modify it
  if (useRawTitle || pageTitle.includes(SITE_NAME)) {
    return pageTitle;
  }
  
  // For other pages, append the site name
  return `${pageTitle}${separator}${SITE_NAME}`;
}
