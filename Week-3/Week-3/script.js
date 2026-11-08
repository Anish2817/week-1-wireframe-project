// Week 3: DOM manipulation and event handling for Saffron Table.

const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");

// Mobile navigation: toggle menu visibility and accessible state.
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

// Close the mobile navigation after a visitor selects a section.
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

// Menu category filter: show only cards matching the selected category.
const filterButtons = document.querySelectorAll(".filter-button");
const menuCards = document.querySelectorAll(".menu-card");
const emptyMessage = document.querySelector("#emptyMessage");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    menuCards.forEach((card) => {
      const shouldShow =
        selectedCategory === "all" || card.dataset.category === selectedCategory;
      card.hidden = !shouldShow;
      if (shouldShow) visibleCount += 1;
    });

    emptyMessage.hidden = visibleCount !== 0;
  });
});

// Reservation form: validate fields and display a front-end confirmation.
const reservationForm = document.querySelector("#reservationForm");
const feedback = document.querySelector("#formFeedback");
const bookingDate = document.querySelector("#bookingDate");

// Prevent selecting a date in the past.
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
  .toISOString()
  .split("T")[0];
bookingDate.min = localToday;

reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#guestName").value.trim();
  const email = document.querySelector("#guestEmail").value.trim();
  const date = bookingDate.value;
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  document.querySelector("#nameError").textContent = name ? "" : "Please enter your name.";
  document.querySelector("#emailError").textContent = emailIsValid ? "" : "Enter a valid email address.";
  document.querySelector("#dateError").textContent = date && date >= localToday ? "" : "Choose today or a future date.";

  if (!name || !emailIsValid || !date || date < localToday) {
    feedback.textContent = "Please correct the highlighted fields and try again.";
    feedback.className = "form-feedback error";
    return;
  }

  const guests = document.querySelector("#guestCount").value;
  feedback.textContent = `Thank you, ${name}! Your request for ${guests} guest(s) on ${date} has been received in this demo.`;
  feedback.className = "form-feedback success";
  reservationForm.reset();
  bookingDate.min = localToday;
});

// Update footer year automatically.
document.querySelector("#currentYear").textContent = new Date().getFullYear();
