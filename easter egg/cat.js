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
