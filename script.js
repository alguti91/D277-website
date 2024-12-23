const input = document.querySelector(".input-container input");
const clearButton = document.querySelector(".clear-button");

clearButton.addEventListener("click", () => {
  input.value = "";
  input.focus();
  clearButton.style.display = "none";
});

input.addEventListener("input", () => {
  clearButton.style.display = input.value ? "block" : "none";
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirm-email").value;

    if (email !== confirmEmail) {
      alert("Email address do not match!");
      event.preventDefault();
    }
  });
