// =========================
// Toggle Mobile Dropdown Menu
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.getElementById("nav-menu");

  // Toggle menu open/close
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  // =========================
  // Active Link Highlight on Click
  // =========================
  const links = document.querySelectorAll("#nav-menu ul li a");

  links.forEach(link => {
    link.addEventListener("click", () => {
      // Remove active from all links
      links.forEach(l => l.classList.remove("active"));

      // Add active to clicked one
      link.classList.add("active");

      // Auto-close menu when a link is clicked (on mobile)
      if (window.innerWidth <= 768) {
        navMenu.classList.remove("open");
      }
    });
  });
});
