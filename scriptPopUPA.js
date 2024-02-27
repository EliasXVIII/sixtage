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






  // ---------------------gracias pop up-------------------


//   // Open Email Form Popup
// function openEmailFormPopup() {
//   document.getElementById("emailFormPopup").style.display = "block";
// }

// // Close Email Form Popup
// function closeEmailFormPopup() {
//   document.getElementById("emailFormPopup").style.display = "none";
// }

// // Open Thank You Popup
// function openThankYouPopup() {
//   document.getElementById("thankYouPopup").style.display = "block";
// }

// // Close Thank You Popup
// function closeThankYouPopup() {
//   document.getElementById("thankYouPopup").style.display = "none";
// }

// // Form Submission Event
// document.getElementById("emailForm").addEventListener("submit", function(event) {
//   event.preventDefault(); // Prevent default form submission

//   // You can add AJAX code here to submit the form data to the server

//   // Show Thank You Popup
//   openThankYouPopup();

//   // Close Email Form Popup
//   closeEmailFormPopup();
// });
  