// Función para manejar el envío del formulario
document.getElementById('mesa-partes-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
  
  // Obtener los valores de los campos
  const nombre = document.getElementById('nombre').value;
  const dni = document.getElementById('dni').value;
  const tramite = document.getElementById('tramite').value;
  const mensaje = document.getElementById('mensaje').value;

  // Validación simple
  if (!nombre || !dni || !tramite || !mensaje) {
    alert('Por favor, completa todos los campos del formulario.');
    return;
  }

  // Mostrar una alerta de éxito
  alert('¡Solicitud enviada correctamente! Nos pondremos en contacto contigo pronto.');

  // Limpiar el formulario después del envío
  document.getElementById('mesa-partes-form').reset();
});
