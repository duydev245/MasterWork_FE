var navbar__icon = document.getElementById("navbar__icon");
navbar__icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        navbar__icon.classList.remove("gg-moon");
        navbar__icon.classList.add("gg-sun");
    } else {
        navbar__icon.classList.remove("gg-sun");
        navbar__icon.classList.add("gg-moon");
    }
};