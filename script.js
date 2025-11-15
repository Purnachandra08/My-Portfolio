// =========================
// Toggle Mobile Dropdown Menu
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  // =========================
  // Active Link Highlight on Click
  // =========================
  const links = document.querySelectorAll("nav ul li a");

  links.forEach(link => {
    link.addEventListener("click", () => {
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      // Auto-close menu when a link is clicked (mobile)
      if (window.innerWidth <= 768) {
        navMenu.classList.remove("open");
      }
    });
  });
});
