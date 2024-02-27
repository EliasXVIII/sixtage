// Función para mostrar la ventana emergente después de un cierto retraso
function displayPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
  }
  
  // Función para cerrar la ventana emergente
  function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }
  
  // Retraso en milisegundos antes de mostrar la ventana emergente
  var delayInMilliseconds = 2000; // 5 segundos
  
  // Espera el retraso especificado y luego muestra la ventana emergente
  setTimeout(displayPopup, delayInMilliseconds);
  