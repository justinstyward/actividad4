// Transiciones entre páginas
document.addEventListener("DOMContentLoaded", () => {
  // Mostrar el contenido al cargar la página
  document.body.classList.remove("hidden");

  // Agregar efecto de salida al cambiar de página
  const links = document.querySelectorAll("a.nav-link");
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Evitar el comportamiento predeterminado
      const targetUrl = link.href;

      // Agregar clase para efecto de salida
      document.body.classList.add("hidden");

      // Redirigir después de la animación
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 500); // Duración de la animación (en ms)
    });
  });
});

  

  
  