function toggleMenu() {
    const navbarCollapse = document.getElementById("navbarCollapse");
    const navbarToggler = document.querySelector(".navbar-toggler");
    navbarCollapse.classList.toggle("active");
    navbarToggler.classList.toggle("active");
}