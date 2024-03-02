const buttonsStatus = document.querySelectorAll("[button-status]");
console.log(buttonsStatus);
if (buttonsStatus.length > 0) {
  buttonsStatus.forEach((button) => {
    button.addEventListener("click", () => {
      const status = button.getAttribute("button-status");
      console.log(status);
    });
  });
}
