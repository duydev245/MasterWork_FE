var navbar__icon = document.getElementById("navbar-toggler-icon");
console.log(navbar__icon);
navbar__icon.onclick = function () {
  navbar__icon.classList.toggle("toggled");
  if (navbar__icon.classList.contains("toggled")) {
    navbar__icon.classList.remove("fa-bars");
    navbar__icon.classList.add("fa-times");
  } else {
    navbar__icon.classList.remove("fa-times");
    navbar__icon.classList.add("fa-bars");
  }
};
