
  // Cierra la ventana emergente del formulario de correo electrónico
  function closeEmailFormPopup() {
    document.getElementById("emailFormPopup").style.display = "none";
  }
  
  // Abre ventana emergente de agradecimiento
  function openThankYouPopup() {
    document.getElementById("thankYouPopup").style.display = "block";
  }
  
  // Cierra ventana emergente de agradecimiento
  function closeThankYouPopup() {
    document.getElementById("thankYouPopup").style.display = "none";
  }
  
  // Evento de envío de formulario
  document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

  
    // Muestra ventana de agradecimiento
    openThankYouPopup();
  
    // Cierra la ventana emergente del formulario de correo electrónico
    closeEmailFormPopup();
  });

