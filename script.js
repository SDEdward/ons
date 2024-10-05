function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000)); // Set expiration date
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/"; // Set cookie
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length); // Trim whitespace
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length); // Return cookie value
    }
    return null; // Cookie not found
}

// Check if the user has visited before
if (!getCookie("visited")) {
    // If the cookie does not exist, set it
    setCookie("visited", "true", 30); // Cookie will expire in 30 days
    console.log("Welcome to our site for the first time!");
} else {
    console.log("Welcome back!");
    // Change the <h1> text to "Welcome back!"
    document.getElementById("cwelcome").innerText = "Welcome back!";
}




function updateCountdown() {
    const targetDate = new Date('2024-10-14T00:00:00'); // Set the target date and time
    const now = new Date(); // Get the current date and time
    const timeDifference = targetDate - now; // Calculate the time difference in milliseconds

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update the countdown display
    document.getElementById('countdown').innerHTML = `
        ${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds
    `;

    // If the countdown is finished, display a message
    if (timeDifference < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = "Happy birthday me! 🎉🎊";
    }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();

function checkOrientation() {
    if (window.innerHeight > window.innerWidth) {
        alert("Please rotate your device to landscape mode for a better experience.");
    }
}

window.addEventListener("resize", checkOrientation);
checkOrientation(); // Initial check
