// Blog post frontmatter schema
export interface BlogFrontmatter {
  title: string;
  description: string;
  publishDate: string;
  updatedDate?: string;
  author?: string;
  heroImage?: string;
  alt?: string;
  isDraft?: boolean;
}

// Export a placeholder frontmatter for type checking
export const frontmatter: BlogFrontmatter = {
  title: '',
  description: '',
  publishDate: '',
};
