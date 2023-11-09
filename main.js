const navToggle = document.querySelector(".mobile-nav-btn");
const primaryNav = document.querySelector(".primary-navigation");
const headerPrimary = document.querySelector(".header-primary");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", true)
    : navToggle.setAttribute("aria-expanded", false);
  primaryNav.toggleAttribute("data-visible");
  headerPrimary.toggleAttribute("data-overlay");
});

// gallery.js
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Masonry
  const gallery = document.querySelector(".gallery");
  const masonry = new Masonry(gallery, {
    itemSelector: ".gallery-item",
  });

  // Call Masonry layout when the page loads
  masonry.layout();
});
