# GitHub Copilot Project Instructions

## Project Overview

This is a static site project built with 11ty (Eleventy) and styled using Tailwind CSS.
The site is designed to be fast, accessible, and SEO-friendly, serving as a personal blog and portfolio.

## Tech Stack

- 11ty (Eleventy) for static site generation (v3.x)
- Tailwind CSS for styling (v4.x)
- Nunjucks as the templating engine
- Markdown for content writing
- HTML and Markdown files are preprocessed with Nunjucks

## General Guidelines

- Use semantic HTML5 elements for better accessibility and SEO.
- Ensure all pages are responsive and mobile-friendly.
- Optimize images and assets for faster load times.

## 11ty (Eleventy) Best Practices

- Organize templates and layouts in a structured manner.
- Use shortcodes for reusable components.
- Implement pagination for blog listings.
- Generate a sitemap.xml and RSS feed for the blog.
- Use permalinks for clean and consistent URLs.

## Tailwind CSS Best Practices

- Utilize utility-first classes for styling components.
- Avoid writing custom CSS when possible; rely on Tailwind's utilities.
- Group related utility classes for better readability.
- Use Tailwind's configuration file to customize themes and extend utilities.
- Implement responsive design using Tailwind's breakpoints.

## Accessibility

- Ensure all interactive elements are keyboard accessible.
- Use ARIA labels where appropriate.
- Maintain sufficient color contrast for text and background elements.

## SEO

- Include meta tags for title, description, and social sharing.
- Use descriptive alt attributes for images.
- Implement structured data where applicable.