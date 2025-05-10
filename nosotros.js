// Mostrar cuadro flotante al inicio
document.addEventListener('DOMContentLoaded', () => {
  const floatingBox = document.createElement('div');
  floatingBox.className = 'floating-title';
  floatingBox.textContent = 'Bienvenidos a San Daniel Comboni';
  document.body.appendChild(floatingBox);

  // Ocultar después de 5 segundos
  setTimeout(() => {
    floatingBox.style.opacity = '0';
    setTimeout(() => {
      floatingBox.remove();
    }, 1000);
  }, 5000);
});

// Botón para volver al inicio
const scrollButton = document.createElement('button');
scrollButton.textContent = '↑ Inicio';
scrollButton.style.position = 'fixed';
scrollButton.style.bottom = '30px';
scrollButton.style.right = '30px';
scrollButton.style.padding = '10px 15px';
scrollButton.style.backgroundColor = '#003366';
scrollButton.style.color = 'white';
scrollButton.style.border = 'none';
scrollButton.style.borderRadius = '6px';
scrollButton.style.cursor = 'pointer';
scrollButton.style.display = 'none';
scrollButton.style.zIndex = '999';
document.body.appendChild(scrollButton);

// Mostrar botón al hacer scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
});

// Acción del botón
scrollButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animación al hacer scroll sobre bloques
const bloques = document.querySelectorAll('.bloque');

function mostrarBloques() {
  const triggerBottom = window.innerHeight * 0.85;
  bloques.forEach(bloque => {
    const boxTop = bloque.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      bloque.style.transform = 'translateY(0)';
      bloque.style.opacity = '1';
    }
  });
}

window.addEventListener('scroll', mostrarBloques);
window.addEventListener('load', () => {
  bloques.forEach(b => {
    b.style.transition = '0.6s ease';
    b.style.transform = 'translateY(50px)';
    b.style.opacity = '0';
  });
  mostrarBloques();
});
