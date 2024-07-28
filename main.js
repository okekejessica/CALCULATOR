let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let buttonText = button.textContent;
    if (buttonText === "C") {
      display.value = "";
    } else if (buttonText === "←") {
      display.value = display.value.slice(0, -1);
    } else if (buttonText === "=") {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "error";
      }
    } else {
        display.value += buttonText
    }

  });
});

  
