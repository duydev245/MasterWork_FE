const btn = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem("theme");

// nếu chế độ được lưu trong localStorage là "dark"
if (currentTheme === "dark") {
    // thì sẽ dùng .dark-theme class
    document.body.classList.add("dark-theme");
}

btn.addEventListener("click", function () {
    // Toggle class .dark-theme mỗi lần click
    document.body.classList.toggle("dark-theme");

    let theme = "light";
    // Nếu body chứa class .dark-theme
    if (document.body.classList.contains("dark-theme")) {
        // thì gán biến theme thành dark
        theme = "dark";
    }
    // lưu lựa chọn vào localStorage
    localStorage.setItem("theme", theme);
});
