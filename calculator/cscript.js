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

function checkDevice() {
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  const dontGoElement = document.getElementById("dontgo");
  const goElement = document.getElementById("go");

  if (isMobile) {
    dontGoElement.style.animation = "appear 0.5s forwards";
    goElement.style.animation = "disappear 0.5s forwards";
  } else {
    goElement.style.animation = "appear 0.5s forwards";
    dontGoElement.style.animation = "disappear 0.5s forwards";
  }
}

// Call checkDevice on load and resize
window.addEventListener("load", checkDevice);
window.addEventListener("resize", checkDevice);
