# Week 4 – Enhancing Web Page Performance and Accessibility

## Project
**Saffron Table – Optimized and Accessible Restaurant Website**

## Overview
This project improves the Week 3 restaurant website with a focus on semantic HTML, keyboard accessibility, readable contrast, image loading, responsive design, and efficient CSS.

## Objectives
- Improve website loading performance.
- Make the website more accessible to keyboard and assistive technology users.
- Use semantic HTML elements.
- Improve mobile responsiveness.
- Evaluate the website using Google Chrome Lighthouse.

## Technologies
- HTML5
- CSS3
- Semantic HTML landmarks and headings
- Responsive web design
- Native browser accessibility features
- Google Chrome Lighthouse

## Improvements Implemented

### 1. Semantic HTML
- Used semantic `header`, `nav`, `main`, `section`, `article`, `address`, and `footer` elements.
- Added a descriptive page title and meta description.
- Used a properly structured heading hierarchy.
- Added a labelled navigation landmark.

### 2. Accessibility
- Added a skip-to-main-content link.
- Implemented visible keyboard focus styles.
- Tested keyboard navigation using Tab.
- Checked that interactive elements can receive keyboard focus.
- Added meaningful alternative text to the hero illustration.
- Used descriptive link text.
- Added a reduced-motion media query to respect user preferences.

### 3. Performance Optimization
- Used a lightweight local SVG illustration instead of a large external raster image.
- Added explicit image dimensions.
- Added preload and fetch priority for the above-the-fold hero image.
- Avoided unnecessary external fonts and JavaScript libraries.
- Consolidated repeated CSS styles.
- Used responsive CSS to support different screen sizes.

### 4. Responsive Design
- Tested the website using Chrome mobile device emulation.
- Checked the hero, menu, reservation, and contact sections.
- Verified that content fits the mobile screen.
- Checked for visible horizontal overflow and overlapping elements.

## Project Files

- `index.html` – Semantic website structure.
- `style.css` – Responsive and accessible styling.
- `images/restaurant-hero.svg` – Lightweight local hero illustration.
- `screenshots/Lighthouse-Mobile.png` – Lighthouse mobile test results.
- `README.md` – Project overview and setup instructions.
- `REPORT.md` – Technical documentation and testing results.

## How to Run

1. Open the Week-4 project folder in Visual Studio Code.
2. Open `index.html`.
3. Right-click and select **Open with Live Server**.
4. View the website in Google Chrome.

## Testing Performed

### Keyboard Accessibility
- Tested keyboard navigation using the Tab key.
- Verified that the skip-to-main-content link appears.
- Checked visible focus indicators on navigation links and buttons.
- Confirmed that keyboard focus moves through interactive elements.

### Responsive Testing
- Tested the desktop layout.
- Tested the mobile layout using Chrome DevTools device emulation.
- Inspected the hero, menu, reservation, and contact sections.
- Checked for overlapping content and horizontal overflow.

### Lighthouse Testing
The website was tested using Google Chrome Lighthouse in Mobile mode.

| Category | Score |
|---|---:|
| Performance | 100 |
| Accessibility | 95 |
| Best Practices | 96 |
| SEO | 100 |

**Test evidence:** `screenshots/Lighthouse-Mobile.png`

The results indicate strong performance and SEO. The accessibility and best-practices scores also identify areas that may benefit from further improvement.

### Additional Testing
- axe DevTools and WAVE testing have not yet been performed.
- No WebPageTest results are claimed.

## Conclusion

Week 4 focused on improving the performance, accessibility, and responsiveness of the Saffron Table restaurant website. Semantic HTML, keyboard navigation, visible focus indicators, descriptive alternative text, and optimized image loading were implemented.

The website achieved a Lighthouse mobile Performance score of 100, Accessibility score of 95, Best Practices score of 96, and SEO score of 100.

This project demonstrates practical techniques for building more accessible, responsive, and performance-conscious web pages.