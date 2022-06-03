// TOOGLE NAV MENU
const menuToggleButton = document.querySelector(".menu-toggle-button");
const menuElement = document.querySelector(".menu");

const toggleMenu = () => {
  menuElement.classList.toggle("active");
  menuToggleButton.classList.toggle("active");
};
menuToggleButton.addEventListener("click", toggleMenu);

//remove active class
const removeActive = (e) => {
  if (e.target.classList.contains("list-link")) {
    menuElement.classList.remove("active");
    menuToggleButton.classList.remove("active");
  }
};
document.addEventListener("click", removeActive);

//theme
const themeToggleButton = document.querySelector(".theme-toggle-button");
const body = document.body;
const current = localStorage.getItem("darkTheme");

if (current) {
  body.classList.add("dark-theme");
}

const toggleTheme = () => {
  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("darkTheme", "active");
  } else {
    localStorage.removeItem("darkTheme");
  }
};
themeToggleButton.addEventListener("click", toggleTheme);
