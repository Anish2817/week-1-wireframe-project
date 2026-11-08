# Week 5: Developing a Single Page Application (SPA) Simulation

**Student Name:** Anish Gannarapu  
**Project:** Saffron Table – Single Page Application  
**Task:** Week 5 – Front-End Development Internship

## 1. Project Overview

The objective of this project was to develop a small-scale Single Page Application (SPA) simulation using HTML, CSS and JavaScript. The application represents a restaurant website called Saffron Table.

The website allows users to navigate between Home, Our Story, Menu and Reservation sections without requiring a complete browser page reload.

## 2. Technologies Used

- HTML5 – Application structure and semantic elements.
- CSS3 – Responsive layout, styling, animations and transitions.
- JavaScript – Client-side navigation, dynamic content rendering and user interactions.
- Browser History and URL Hash – Navigation state and section routing.

## 3. Application Architecture

The application uses a single main HTML container. JavaScript manages the content displayed inside the application based on the selected route.

The main sections include:

- Home
- Our Story
- Menu
- Reservation

The URL hash identifies the active section, allowing navigation between sections without loading a separate HTML page.

## 4. Key Features Implemented

### Client-Side Navigation
Users can navigate between different sections using the navigation menu. The URL updates according to the selected section.

### Dynamic Content Rendering
JavaScript updates the main content area when users navigate between sections.

### Menu Filtering
Users can filter restaurant menu items by categories such as Starters, Main Course and Desserts.

### Mobile Navigation
A hamburger menu provides navigation on smaller screens.

### Reservation Form
The reservation form collects user details and displays a confirmation message after successful validation. This is a demonstration feature and does not submit or store real bookings.

### Visual Transitions
CSS animations and transitions improve the experience when navigating between sections.

## 5. Responsive Design

The application was tested using Chrome DevTools with a mobile viewport based on the iPhone 14 Pro dimensions.

The layout was checked across the Home, Story, Menu and Reservation sections. The navigation menu and content layout were also tested on mobile.

## 6. Implementation Challenges

**Challenge 1: Dynamic navigation**

Managing different content sections without full page reloads required client-side routing logic.

**Approach:** JavaScript uses URL hash changes to identify the selected route and render the corresponding content.

**Challenge 2: Mobile navigation**

The desktop navigation needed to work on smaller screens.

**Approach:** A responsive hamburger menu was implemented using JavaScript and CSS.

**Challenge 3: Maintaining a consistent interface**

Different sections needed to maintain the same visual identity.

**Approach:** Shared CSS styles, typography, colors and layout rules were used throughout the application.

## 7. Testing and Debugging

The following functionality was tested:

- Navigation between Home, Story, Menu and Reservation.
- URL hash updates during navigation.
- Mobile hamburger menu open and close behavior.
- Menu category filtering.
- Reservation form validation and confirmation.
- Responsive layout using Chrome DevTools.
- Browser navigation using the available navigation controls.

## 8. Project Limitations

The reservation form is a front-end demonstration only. It does not connect to a backend server or database. The application does not provide real booking management or persistent user data.

## 9. Conclusion

This project demonstrates the fundamentals of Single Page Application development using HTML, CSS and JavaScript. It combines dynamic content rendering, client-side navigation, responsive design and interactive features into one application.

The project provided practical experience in DOM manipulation, URL-based routing, user interaction handling and building a consistent front-end experience without full page reloads.