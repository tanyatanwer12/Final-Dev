document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("loginButton");
  const loginPopup = document.getElementById("loginPopup");
  const close = document.querySelector(".close");
  const loginForm = document.getElementById("loginForm");
  const usernameDisplay = document.getElementById("usernameDisplay");

  // Show the popup
  loginButton.addEventListener("click", function () {
    loginPopup.style.display = "block";
  });

  // Close the popup
  close.addEventListener("click", function () {
    loginPopup.style.display = "none";
  });

  // Close the popup when clicking outside the popup content
  window.addEventListener("click", function (event) {
    if (event.target == loginPopup) {
      loginPopup.style.display = "none";
    }
  });

  // Handle the form submission
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const username = document.getElementById("username").value;
    // Here you can add authentication logic
    // For this example, we'll just display the username
    usernameDisplay.textContent = `Welcome, ${username}!`;
    loginPopup.style.display = "none";
  });
});
