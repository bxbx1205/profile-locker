document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password-input");
  const unlockButton = document.getElementById("unlock-button");
  const errorMessage = document.getElementById("error-message");

  unlockButton.addEventListener("click", () => {
    const enteredPassword = passwordInput.value;

    chrome.storage.sync.get(["profilePassword"], (data) => {
      if (enteredPassword === data.profilePassword) {
        chrome.runtime.sendMessage({ action: "unlock" }, (response) => {
          if (response.success) {
            chrome.tabs.create({ url: "https://www.google.com" }, () => {
              window.close();
            });
          }
        });
      } else {
        errorMessage.textContent = "Incorrect password.";
      }
    });
  });

  passwordInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      unlockButton.click();
    }
  });
});