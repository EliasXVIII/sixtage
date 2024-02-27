// Open Email Form Popup
function openEmailFormPopup() {
    document.getElementById("emailFormPopup").style.display = "block";
  }
  
  // Close Email Form Popup
  function closeEmailFormPopup() {
    document.getElementById("emailFormPopup").style.display = "none";
  }
  
  // Open Thank You Popup
  function openThankYouPopup() {
    document.getElementById("thankYouPopup").style.display = "block";
  }
  
  // Close Thank You Popup
  function closeThankYouPopup() {
    document.getElementById("thankYouPopup").style.display = "none";
  }
  
  // Form Submission Event
  document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // You can add AJAX code here to submit the form data to the server
  
    // Show Thank You Popup
    openThankYouPopup();
  
    // Close Email Form Popup
    closeEmailFormPopup();
  });