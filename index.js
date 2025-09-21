//Navbar
function toggleMenu() {
  const menu = document.getElementById("menu");
  const toggler = document.getElementById("toggler");
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    toggler.classList.remove("fa-bars"); // Remove hamburger icon
    toggler.classList.add("fa-times"); // Add close icon
  } else {
    toggler.classList.remove("fa-times"); // Remove close icon
    toggler.classList.add("fa-bars"); // Add hamburger icon
  }
}
//Navbar END
// Change navbar style on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 50) {
    // adjust scroll amount
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// For Dropdown Smaller screen

function toggleDropdown() {
  const dropdown = document.getElementById("servicesDropdown");
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
}
