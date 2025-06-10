document.addEventListener("DOMContentLoaded", () => {
  const myButton = document.getElementById("myButton");
  const messageElement = document.getElementById("message");

  myButton.addEventListener("click", () => {
    messageElement.textContent =
      "Button was clicked! Welcome to your frontend dev setup!";
    console.log("Button clicked!");
  });
});
