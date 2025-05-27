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

## Project Look and Feel (GitHub Inspired)

This section provides guidelines for generating HTML elements with Tailwind CSS classes to maintain a consistent look and feel inspired by GitHub's UI.

### General Principles

- **Clean and Modern:** Aim for a clean, uncluttered, and modern aesthetic.
- **Accessibility:** Prioritize accessibility in all design choices (color contrast, focus states, etc.).
- **Consistency:** Apply these guidelines consistently across all components and pages.

### Color Palette

- **Backgrounds:**
  - Main background: `bg-white` (light mode), `bg-[#0d1117]` (dark mode).
  - Secondary/Accent backgrounds (e.g., cards, sidebars): `bg-gray-50` (light), `bg-[#161b22]` (dark mode) or `bg-gray-100` (light), `bg-gray-800` (dark) for subtle distinctions.
- **Text:**
  - Primary text: `text-gray-900` (light), `text-[#c9d1d9]` (dark).
  - Secondary text: `text-gray-600` (light), `text-gray-400` (dark).
- **Links:**
  - Default: `text-blue-600` (light), `text-blue-500` (dark).
  - Hover: `hover:text-blue-700` (light), `hover:text-blue-400` (dark), `hover:underline`.
- **Borders:**
  - `border-gray-200` (light), `border-gray-700` (dark) or `border-gray-300` (light), `border-gray-600` (dark).
- **Interactive Elements (Buttons):**
  - Primary buttons: `bg-green-600 hover:bg-green-700 text-white`.
  - Secondary/Default buttons: `bg-gray-200 hover:bg-gray-300 text-gray-800` (light), `bg-gray-700 hover:bg-gray-600 text-white` (dark).

### Typography

- **Font Family:** Continue using `font-sans` (Titillium Web) for main text and `font-mono` (Consolas, Menlo, etc.) for code, as defined in `public/css/index.css`.
- **Sizing:** Use Tailwind's default type scale. Common sizes: `text-sm`, `text-base`, `text-lg`, `text-xl`.
- **Weight:** `font-normal` for body, `font-semibold` or `font-bold` for headings and important text.

### Spacing and Padding

- **Consistency:** Use Tailwind's spacing scale (e.g., `p-2`, `p-4`, `m-2`, `m-4`).
- **Gutters:** Employ `gap-4` or `gap-6` in flex/grid layouts.
- **Sections:** Use larger padding for page sections, e.g., `py-8`, `px-4` or `sm:px-6 lg:px-8`.
- **Cards/Boxes:** Consistent internal padding, e.g., `p-4` or `p-6`.

### Borders and Shadows

- **Border Radius:**
  - General elements (cards, inputs): `rounded-md` (6px).
  - Buttons: `rounded-md`.
  - Avatars/Circular elements: `rounded-full`.
- **Borders:**
  - Subtle borders: `border` with colors defined above.
  - Inputs: `border border-gray-300 focus:border-blue-500 focus:ring-blue-500` (light), `border-gray-600 focus:border-blue-500 focus:ring-blue-500` (dark).
- **Shadows:**
  - Use sparingly. Prefer `shadow-sm` or `shadow` for subtle elevation on cards or interactive elements. Avoid heavy shadows.

### Interactive Elements

- **Buttons:**
  - Padding: `px-4 py-2` for standard buttons. `px-3 py-1.5 text-sm` for smaller buttons.
  - States: Clear `hover:`, `focus:`, and `active:` states. Use `focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`.
- **Input Fields (text, select, textarea):**
  - `block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm` (adjust colors for dark mode as per palette).
  - Dark mode example: `block w-full rounded-md border-gray-600 bg-gray-700 text-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`.
- **Navigation Links:**
  - Active state: `bg-gray-100` (light), `bg-gray-700` (dark) or a distinct border color.

### Iconography

- If using icons (e.g., SVGs), ensure they are simple, clear, and match the surrounding text color unless they are meant to convey a specific status (e.g., error icon in red).

Remember to adapt these guidelines based on the specific component being built and prioritize usability and accessibility.