document.addEventListener("DOMContentLoaded", () => {
  const registerButton = document.getElementById("register-button");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const errorMessage = document.getElementById("error-message");

  registerButton.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (!username || !password) {
      errorMessage.textContent = "Username and password are required.";
      return;
    }

    if (password !== confirmPassword) {
      errorMessage.textContent = "Passwords do not match.";
      return;
    }

    chrome.storage.sync.set(
      { username, profilePassword: password, profileLocked: true },
      () => {
        window.location.href = chrome.runtime.getURL("locked.html");
      }
    );
  });
});