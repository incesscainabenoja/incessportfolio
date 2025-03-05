document.addEventListener("DOMContentLoaded", function () {
  // Smooth fade-in on scroll
  const sections = document.querySelectorAll("section");
  const options = { threshold: 0.2 };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Shrinking navbar on scroll
  const navbar = document.getElementById("desktop-nav");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("shrink");
    } else {
      navbar.classList.remove("shrink");
    }
  });

  // Updated Hamburger menu animation function
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const body = document.body;

    menu.classList.toggle("open");
    icon.classList.toggle("open");
    body.classList.toggle("no-scroll"); // Prevents background scrolling when menu is open
  }
  window.toggleMenu = toggleMenu;

  // Close menu when clicking outside of it
  document.addEventListener("click", (event) => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    if (!menu.contains(event.target) && !icon.contains(event.target)) {
      menu.classList.remove("open");
      icon.classList.remove("open");
      document.body.classList.remove("no-scroll");
    }
  });

  // Button hover animations
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.classList.add("hover");
    });
    button.addEventListener("mouseleave", () => {
      button.classList.remove("hover");
    });
  });
});
