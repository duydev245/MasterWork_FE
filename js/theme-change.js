// const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
// const currentTheme = localStorage.getItem('theme');

// if (currentTheme) {
//     document.documentElement.setAttribute('data-theme', currentTheme);

//     if (currentTheme === 'dark') {
//         toggleSwitch.checked = true;
//     }
// }

// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         localStorage.setItem('theme', 'dark');
//     }
//     else {
//         document.documentElement.setAttribute('data-theme', 'light');
//         localStorage.setItem('theme', 'light');
//     }
// }

// toggleSwitch.addEventListener('change', switchTheme, false);

const btn = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem("theme");

// nếu chế độ được lưu trong localStorage là "dark"
if (currentTheme === "dark") {
    // thì sẽ dùng .dark-theme class
    btn.checked = true;
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

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}