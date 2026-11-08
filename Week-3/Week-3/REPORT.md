# Week 3 Technical Report
## Integrating JavaScript for Interactive User Experience

**Student Name:** Anish Gannarapu  
**Project:** Saffron Table – Interactive Restaurant Website  
**Week:** 3

## 1. Objective
The objective of this project was to enhance the responsive restaurant website developed in Week 2 by implementing interactive features using plain JavaScript.

## 2. Technologies Used
- HTML5
- CSS3
- JavaScript
- Visual Studio Code
- Google Chrome

## 3. Features Implemented

### Mobile Navigation
Implemented a hamburger menu that opens and closes the navigation links on smaller screens using JavaScript event handling.

### Dynamic Menu Filtering
Added category filter buttons for All, Starters, Main Course and Desserts. JavaScript dynamically displays only the selected category of menu items.

### Reservation Form Validation
Implemented form validation to check:
- Full name is entered.
- Email address has a valid format.
- Reservation date is today or a future date.

### Submission Confirmation
After valid form submission, JavaScript displays a confirmation message containing the customer's name, guest count and selected date.

## 4. JavaScript Implementation
JavaScript is connected to the HTML page through the external `script.js` file.

The implementation uses:
- DOM selection to access HTML elements.
- Event listeners to respond to clicks and form submissions.
- Conditional statements to validate user input.
- DOM manipulation to update menu items and display messages.

## 5. Testing and Results
The website was tested using Google Chrome at a 400px mobile viewport.

The following tests were completed successfully:
1. Mobile navigation opens and closes.
2. Menu category filtering works.
3. Empty and invalid form fields display validation errors.
4. Valid form details display a submission confirmation.

Screenshots of the tests are available in the screenshots folder.

## 6. Challenges and Solutions
One challenge was ensuring that interactive features worked without affecting the existing responsive layout.

This was addressed by keeping JavaScript in a separate file and using CSS classes to control the visibility and appearance of interactive elements.

Form validation was also implemented to prevent incomplete or invalid details from being accepted.

## 7. Limitations
The reservation form is a frontend demonstration. It displays a confirmation message but does not store reservations or connect to a real restaurant booking system.

## 8. Learning Outcomes
This project improved my understanding of JavaScript fundamentals, DOM manipulation, event handling, conditional logic, form validation and integration of HTML, CSS and JavaScript.