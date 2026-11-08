# Week 4 Technical Report
## Enhancing Web Page Performance and Accessibility

**Student:** Anish Gannarapu  
**Project:** Saffron Table – Optimized and Accessible Restaurant Website

### 1. Objective
The objective was to improve the website's loading efficiency, semantic structure and accessibility for visitors using keyboards, assistive technologies and different screen sizes.

### 2. Performance Improvements
- Replaced the external hero background photograph with a small local SVG illustration to reduce dependence on a third-party image host and reduce image transfer size.
- Added explicit `width` and `height` attributes to the hero image to reserve layout space and reduce layout shifting.
- Preloaded the above-the-fold SVG and used `fetchpriority="high"` because it is the main visual element.
- Kept the page lightweight by using system fonts and avoiding external JavaScript libraries, icon libraries and web font requests.
- Consolidated repeated CSS declarations and used simple class selectors.
- Added responsive CSS rules so the layout adapts to smaller screens.

### 3. Accessibility Improvements
- Used semantic HTML landmarks such as `header`, `nav`, `main` and `footer`.
- Added a descriptive page title, metadata and a logical heading hierarchy.
- Added a skip-to-main-content link so keyboard users can bypass repeated navigation.
- Added an accessible name to the brand link and a descriptive `aria-label` to the navigation landmark.
- Added meaningful alternative text to the hero illustration.
- Added visible `:focus-visible` outlines for keyboard navigation.
- Used descriptive link text and a telephone link for the contact number.
- Added a `prefers-reduced-motion` media query to respect visitors who request reduced motion.
- Used dark text on light backgrounds and light text on the dark hero/footer to support readability.

### 4. Code Structure
The HTML contains the content and semantic structure. The CSS is stored in a separate stylesheet and uses reusable custom properties for colours and typography. The image asset is stored locally in the `images` folder. The page does not require a JavaScript library or external font service.

### 5. Testing Plan
The page should be tested in Chrome at desktop and mobile widths. Keyboard testing should include Tab, Shift+Tab and Enter, with attention to the skip link and visible focus state. Run Lighthouse from Chrome DevTools and review Performance, Accessibility, Best Practices and SEO. Run axe DevTools or WAVE to identify additional accessibility issues.

**Important:** Record the actual Lighthouse and accessibility tool results after running them. No performance score or automated audit result is claimed in this report.

### 6. Challenges and Solutions
A key challenge was reducing external dependencies while retaining a visually engaging hero section. A lightweight local SVG illustration was used instead of a remote background image. Another challenge was making navigation usable without relying on a mouse. A skip link, semantic navigation landmark and clear keyboard focus styles were added.

### 7. Learning Outcomes
This task strengthened my understanding of semantic HTML, alternative text, keyboard navigation, focus indicators, responsive CSS, reduced-motion preferences, image loading priorities and basic web performance practices.
