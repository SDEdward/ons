function appendToDisplay(value) {
  if (value === "*") {
    value = "×";
  }
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function backspace() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  const display = document.getElementById("display");
  const expression = display.value.replace(/×/g, "*");

  if (!expression) {
    display.value = "Error";
    return;
  }

  try {
    console.log("Evaluating expression:", expression);
    const parsedExpression = math.parse(expression);
    display.value = parsedExpression.evaluate();
  } catch (error) {
    console.error("Error evaluating expression:", error);
    display.value = "Error";
  }
}

function fadeIn() {
  document.body.classList.add("visible");
}

function handleBlur() {
  document.body.classList.remove("visible");
  setTimeout(fadeIn, 100);
}

window.addEventListener("load", fadeIn);
window.addEventListener("blur", handleBlur);
window.addEventListener("focus", fadeIn);
