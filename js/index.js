
    // Manejo del clic en el enlace del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

function toggleMenu() {
    var navbarCollapse = document.getElementById("navbarCollapse");
    navbarCollapse.classList.toggle("active");
  }