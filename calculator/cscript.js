function appendToDisplay(value) {
    // Append '×' for multiplication
    if (value === '*') {
        value = '×';
    }
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Remove the last character
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Replace '×' with '*' for evaluation
        const expression = display.value.replace(/×/g, '*');
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error'; // Display error if evaluation fails
    }
}

// Function to add the 'visible' class
function fadeIn() {
    document.body.classList.add('visible');
}

// Function to handle unfocus event
function handleBlur() {
    document.body.classList.remove('visible');
    setTimeout(fadeIn, 100); // Delay to allow the fade-out effect to complete
}

// Event listeners for focus and blur
window.addEventListener('load', fadeIn); // Fade in on load
window.addEventListener('blur', handleBlur); // Fade out on unfocus
window.addEventListener('focus', fadeIn); // Fade in on focus
