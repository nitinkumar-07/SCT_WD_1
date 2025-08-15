
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".navList");

menuToggle.addEventListener("click", () => {
    navList.classList.toggle("active");

    if (menuToggle.classList.contains("fa-bars")) {
        menuToggle.classList.remove("fa-bars");
        menuToggle.classList.add("fa-xmark");
    } else {
        menuToggle.classList.remove("fa-xmark");
        menuToggle.classList.add("fa-bars");
    }
});
