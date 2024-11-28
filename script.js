function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

if (!getCookie("visited")) {
  setCookie("visited", "true", 30);
  console.log("Welcome to our site for the first time!");
} else {
  console.log("Welcome back!");
  document.getElementById("cwelcome").innerText = "Welcome back!";
}

function updateCountdown() {
  const targetDateE = new Date("2025-10-14T00:00:00"); // Edward's birthday
  const targetDateS = new Date("2024-01-08T00:00:00"); // Stefan's birthday
  const targetDateNew = new Date("2024-12-12T00:00:00"); // Petru's birthday
  const now = new Date();

  let nextBirthday;
  let birthdayName;

  // Determine the next birthday
  if (now < targetDateNew) {
    nextBirthday = targetDateNew;
    birthdayName = "Petru's birthday";
  } else if (now < targetDateS) {
    nextBirthday = targetDateS;
    birthdayName = "Stefan's birthday";
  } else if (now < targetDateE) {
    nextBirthday = targetDateE;
    birthdayName = "Edward's birthday";
  } else {
    nextBirthday = new Date("2025-01-08T00:00:00"); // Next Stefan's birthday
    birthdayName = "Stefan's birthday";
  }

  const timeDifference = nextBirthday - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Update the countdown display
  document.getElementById("countdown").innerHTML = `
        ${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds until ${birthdayName}!
    `;

  // Check if the countdown is complete
  if (timeDifference < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "Happy birthday! 🎉🎊";
  }
}

// Set up the countdown interval
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

function checkOrientation() {
  if (window.innerHeight > window.innerWidth) {
    document.getElementById("hide").style.animation = "disappear 0.5s forwards";
    document.getElementById("donthide").style.animation =
      "appear 0.5s forwards";
  } else {
    document.getElementById("hide").style.animation = "appear 0.5s forwards";
    document.getElementById("donthide").style.animation =
      "disappear 0.5s forwards";
  }
}

window.addEventListener("resize", checkOrientation);
checkOrientation();
