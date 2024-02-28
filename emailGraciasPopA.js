
  // Cierra la ventana del formulario de correo electrónico
  function closeEmailFormPopup() {
    document.getElementById("emailFormPopup").style.display = "none";
  }
  
  // Abre ventana emergente de agradecimiento
  function openThankYouPopup() {
    document.getElementById("thankYouPopup").style.display = "block";
  }
  
  // Cierra ventana de agradecimiento con (x)
  function closeThankYouPopup() {
    document.getElementById("thankYouPopup").style.display = "none";
  }
  
  // Evento de envío de formulario
  document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío de formulario predeterminado

  
    // Muestra ventana de agradecimiento
    openThankYouPopup();
  
    // Cierra la ventana emergente del formulario de correo electrónico
    closeEmailFormPopup();
  });

