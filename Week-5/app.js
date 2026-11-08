const pageContent = document.getElementById("page-content");
const nav = document.getElementById("primary-nav");
const menuToggle = document.getElementById("menu-toggle");
const toast = document.getElementById("toast");
document.getElementById("year").textContent = new Date().getFullYear();

const menuItems = [
  {name:"Roasted Pumpkin Soup",category:"starters",description:"Silky pumpkin, toasted seeds and herb oil.",price:"₹240"},
  {name:"Garden Herb Salad",category:"starters",description:"Seasonal greens, citrus and crisp vegetables.",price:"₹280"},
  {name:"Saffron Cream Pasta",category:"mains",description:"Fresh pasta with saffron cream and parmesan.",price:"₹420"},
  {name:"Charred Vegetable Bowl",category:"mains",description:"Fire-roasted vegetables, grains and tahini.",price:"₹390"},
  {name:"Cardamom Panna Cotta",category:"desserts",description:"A delicate set cream with seasonal fruit.",price:"₹220"},
  {name:"Dark Chocolate Tart",category:"desserts",description:"Rich chocolate, cocoa nib and sea salt.",price:"₹260"}
];

const routes = {
  home: () => `<section class="hero"><div class="hero-copy"><p class="eyebrow">FRESH INGREDIENTS · THOUGHTFUL COOKING</p><h1>A table worth<br><span>gathering around.</span></h1><p class="hero-description">Seasonal plates, warm hospitality, and memorable moments—served fresh every day.</p><div class="hero-actions"><a class="button button-primary" href="#menu">Explore the menu</a><a class="text-link" href="#story">Discover our story ↗</a></div></div><div class="hero-art"><img src="assets/restaurant-hero.svg" alt="Illustration of a thoughtfully arranged restaurant meal with fresh herbs and vegetables" width="760" height="620"><span class="art-note">GOOD FOOD. GOOD COMPANY.</span></div></section>`,
  menu: () => `<section class="content-wrap"><div class="page-heading"><p class="kicker">MADE WITH CARE</p><h1>Our Menu</h1><p>Seasonal favourites prepared with fresh ingredients.</p></div><div class="filter-row" aria-label="Filter menu items"><button class="filter-btn" data-filter="all" aria-pressed="true">All</button><button class="filter-btn" data-filter="starters" aria-pressed="false">Starters</button><button class="filter-btn" data-filter="mains" aria-pressed="false">Main course</button><button class="filter-btn" data-filter="desserts" aria-pressed="false">Desserts</button></div><div class="card-grid" id="menu-grid">${menuItems.map(menuCard).join("")}</div></section>`,
  story: () => `<section class="content-wrap"><div class="story-layout"><div><p class="kicker">OUR STORY</p><h1>Rooted in food.<br><span>Made for people.</span></h1><p class="muted">Saffron Table is a neighbourhood restaurant built around seasonal cooking, thoughtful sourcing and the simple pleasure of sharing a meal.</p><p class="muted">Our kitchen keeps things honest: carefully selected ingredients, balanced flavours and hospitality that makes every guest feel welcome.</p><a class="button button-primary" href="#reservation">Plan your visit</a></div><div class="story-panel"><p class="kicker">OUR PROMISE</p><h2>Good ingredients. Honest cooking. A seat for everyone.</h2><p>We believe memorable dining is about more than what is on the plate. It is about the people around the table.</p></div></div></section>`,
  reservation: () => `<section class="content-wrap"><div class="page-heading"><p class="kicker">WE'LL SAVE YOU A SEAT</p><h1>Reserve a Table</h1><p>Send a reservation request using the demo form below.</p></div><form class="form-card" id="reservation-form" novalidate><div class="form-grid"><div class="field"><label for="guest-name">Your name</label><input id="guest-name" name="name" autocomplete="name" required></div><div class="field"><label for="guest-email">Email address</label><input id="guest-email" name="email" type="email" autocomplete="email" required></div><div class="field"><label for="guest-date">Date</label><input id="guest-date" name="date" type="date" required></div><div class="field"><label for="guest-count">Guests</label><select id="guest-count" name="guests"><option>1</option><option selected>2</option><option>3</option><option>4</option><option>5</option><option>6</option></select></div><div class="field full"><button class="button button-primary" type="submit">Send request</button><p class="form-message" id="form-message" role="status" aria-live="polite"></p><p class="muted">Demo only: this form does not send or store a real booking.</p></div></div></form></section>`,
  contact: () => `<section class="content-wrap"><div class="page-heading"><p class="kicker">COME SAY HELLO</p><h1>Contact</h1><p>We would love to welcome you to Saffron Table.</p></div><div class="contact-grid"><article class="card"><p class="number">01 / VISIT</p><h3>Find us</h3><p>Central neighbourhood, Chilakaluripet, Andhra Pradesh</p></article><article class="card"><p class="number">02 / HOURS</p><h3>Opening hours</h3><p>Monday–Sunday<br>12:00 PM – 10:30 PM</p></article><article class="card"><p class="number">03 / CALL</p><h3>Phone</h3><p>Demo contact details — replace before publishing.</p></article><article class="card"><p class="number">04 / CONNECT</p><h3>Plan a visit</h3><p><a class="text-link" href="#reservation">Request a table ↗</a></p></article></div></section>`
};

function menuCard(item) {
  return `<article class="card" data-category="${item.category}"><p class="number">${item.category.toUpperCase()}</p><h3>${item.name}</h3><p>${item.description}</p><p class="price">${item.price}</p></article>`;
}

function currentRoute() {
  const requested = location.hash.replace("#", "") || "home";
  return Object.hasOwn(routes, requested) ? requested : "not-found";
}

function renderRoute({focus = false} = {}) {
  const route = currentRoute();
  pageContent.setAttribute("aria-busy", "true");
  pageContent.innerHTML = route === "not-found"
    ? `<section class="error-page"><p class="kicker">404 · PAGE NOT FOUND</p><h1>That page isn't here.</h1><a class="button button-primary" href="#home">Return home</a></section>`
    : routes[route]();
  document.title = `${route === "not-found" ? "Page Not Found" : route[0].toUpperCase()+route.slice(1)} | Saffron Table`;
  document.querySelectorAll("[data-route]").forEach(link => {
    if (link.dataset.route === route) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  closeNavigation();
  pageContent.setAttribute("aria-busy", "false");
  if (focus) document.getElementById("app-main").focus({preventScroll:true});
  window.scrollTo({top:0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"});
}

function closeNavigation() {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  nav.classList.toggle("open", !isOpen);
});

document.addEventListener("click", event => {
  const filter = event.target.closest("[data-filter]");
  if (filter) {
    const category = filter.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach(button => button.setAttribute("aria-pressed", String(button === filter)));
    document.querySelectorAll("[data-category]").forEach(card => {
      card.hidden = category !== "all" && card.dataset.category !== category;
    });
  }
});

document.addEventListener("submit", event => {
  if (event.target.id !== "reservation-form") return;
  event.preventDefault();
  const form = event.target;
  const message = document.getElementById("form-message");
  if (!form.reportValidity()) {
    message.textContent = "Please complete the required fields with valid information.";
    return;
  }
  const name = form.elements.name.value.trim();
  const guests = form.elements.guests.value;
  const date = form.elements.date.value;
  message.textContent = `Thanks, ${name}. Your demo request for ${guests} guest(s) on ${date} is ready. No booking was sent.`;
  form.reset();
});

window.addEventListener("hashchange", () => renderRoute({focus:true}));
window.addEventListener("popstate", () => renderRoute({focus:true}));
renderRoute();
