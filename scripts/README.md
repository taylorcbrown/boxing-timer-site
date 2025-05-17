# Boxing Timer Champ - Development Scripts

This directory contains utility scripts to help with the development and maintenance of the Boxing Timer Champ website.

## Image Optimization Script

The `optimize-images.sh` script helps maintain consistent image quality and performance across the website by:

1. Resizing images to appropriate dimensions
2. Optimizing file sizes
3. Creating WebP versions for modern browsers
4. Organizing images in the correct directories

### Usage

```bash
./optimize-images.sh <image_path> <output_directory> [custom_filename]
```

#### Parameters:

- `image_path`: Path to the source image file
- `output_directory`: Subdirectory under `/public/images/` where the image should be stored
- `custom_filename` (optional): Custom name for the output file (without extension)

#### Examples:

Basic usage:
```bash
./optimize-images.sh ~/Downloads/my-photo.jpg blog
```

With custom filename:
```bash
./optimize-images.sh ~/Downloads/my-photo.jpg blog new-feature-hero
```

### Features

- **Automatic resizing**: Resizes images to a maximum width of 1200px while preserving aspect ratio
- **WebP conversion**: Creates WebP versions for better performance on modern browsers
- **Dimension extraction**: Outputs the final dimensions for use in HTML
- **HTML example**: Provides ready-to-use HTML code with proper attributes

### Best Practices for Images

1. **Always optimize images** before adding them to the site
2. **Use descriptive filenames** that reflect the content
3. **Include proper alt text** for accessibility
4. **Specify width and height attributes** to prevent layout shifts
5. **Use the `loading="lazy"` attribute** for images below the fold
6. **Consider using WebP** with fallbacks for older browsers

### Image Directories Structure

- `/public/images/blog/` - Blog post featured images and content images
- `/public/images/features/` - Feature illustrations and screenshots
- `/public/images/app/` - App screenshots and promotional images

### Example Integration in Blog Posts

```astro
---
import BlogLayout from '../../layouts/BlogLayout.astro';

export const publishDate = '2025-05-15T09:00:00-07:00';
export const heroImage = '/images/blog/my-optimized-image.jpg';

export const frontmatter = {
  title: "My Blog Post Title",
  description: "Description of the blog post",
  publishDate: publishDate,
  heroImage: heroImage,
  alt: "Description of the hero image"
};
---

<BlogLayout
  title={frontmatter.title}
  description={frontmatter.description}
  publishDate={publishDate}
  heroImage={heroImage}
  alt={frontmatter.alt}
>
  <!-- Blog content here -->
</BlogLayout>
```
