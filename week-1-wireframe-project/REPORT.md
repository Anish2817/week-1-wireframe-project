# Week 1 Task Report: Transforming Wireframes into Static Web Pages

## Project overview
For this task, I developed a responsive static landing page named **Northstar** using HTML5 and CSS3. The goal was to practice translating a visual page concept into a structured webpage, organizing the content with semantic HTML, styling it with CSS, and adapting the layout for desktop, tablet, and mobile screens.

**Note:** A specific wireframe image was not included in the task information available during implementation. Therefore, this submission uses an original sample landing-page layout. The page should be adjusted if the internship evaluator has supplied a separate reference wireframe.

## Design decisions
The page uses a simple visual hierarchy: a header with brand identity and navigation, a hero section with a primary heading and call-to-action, a three-card feature section, an about section, a contact call-to-action, and a footer. A restrained purple, white, and dark navy palette was selected to create contrast and keep the interface consistent. Typography uses a system font stack so the page does not depend on external font downloads.

## HTML structure
The page uses semantic elements including `header`, `nav`, `main`, `section`, `article`, and `footer`. This makes the document hierarchy easier to understand and maintain. Descriptive link text, a navigation label, image-free CSS illustrations, and a viewport meta tag were included to support usability and responsive rendering.

## CSS and layout strategy
CSS custom properties store reusable colors, border radius, and container width values. Flexbox is used for navigation, button groups, and footer alignment. CSS Grid is used for the hero, feature cards, and about section. Spacing, typography, backgrounds, borders, and hover states are defined in a consistent stylesheet. The dashboard-style hero visual and decorative about panel are created with HTML and CSS rather than external image assets.

## Responsive implementation
Media queries at 900px, 700px, and 390px adjust the layout for narrower screens. Multi-column sections collapse into single-column layouts, navigation becomes a toggleable mobile menu, and typography and spacing are reduced where needed. The mobile menu uses a small JavaScript event handler to open and close the navigation; the page layout and styling remain implemented in HTML and CSS.

## Challenges and solutions
One challenge in responsive development is preventing multi-column content from becoming cramped on small screens. CSS Grid column changes and flexible container widths address this. Another challenge is keeping navigation usable on mobile; a menu button and an `aria-expanded` state provide a compact navigation pattern. Consistent spacing was maintained through shared container widths and CSS variables rather than repeating unrelated values.

## Testing checklist
- [ ] Open `index.html` in a modern browser.
- [ ] Check desktop width (approximately 1440px).
- [ ] Check tablet width (approximately 768px).
- [ ] Check mobile width (approximately 375px).
- [ ] Confirm navigation links move to the correct sections.
- [ ] Confirm the mobile menu opens and closes.
- [ ] Compare the finished page with the internship's supplied wireframe, if one is available.

## Technologies used
HTML5, CSS3, CSS Grid, Flexbox, CSS media queries, and vanilla JavaScript for the mobile navigation interaction.

## Deliverables
The project includes `index.html`, `style.css`, this report in Markdown format, and a README with setup and GitHub instructions. The report can be opened in a Markdown editor or copied into Microsoft Word and saved as a `.docx` file if the submission portal requires Word format.
