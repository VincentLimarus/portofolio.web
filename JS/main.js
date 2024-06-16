document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("mobile-menu");
  const navbar = document.querySelector(".navbar");

  menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggle.classList.toggle("active");

    // Toggle body scrolling when menu is active
    document.body.classList.toggle("no-scroll");
  });

  // Close the menu when a nav link is clicked
  const navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navbar.classList.remove("active");
      menuToggle.classList.remove("active");
      document.body.classList.remove("no-scroll");
    });
  });

  // Close the menu if clicked outside of it
  document.addEventListener("click", function (event) {
    if (!navbar.contains(event.target) && !menuToggle.contains(event.target)) {
      navbar.classList.remove("active");
      menuToggle.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });

  // Prevent menu from closing on clicking inside the menu itself
  navbar.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});
