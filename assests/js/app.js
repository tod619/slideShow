// Add event listenr to the button
document.querySelector(".banner button").addEventListener("click", () => {
  //Hide the banner element
  document.querySelector(".banner").style.display = "none";

  //Display the slideshow
  document.querySelector(".slideshow-wrapper").style.cssText =
    "opacity: 1; visibility: visible";

  // Add animation to the slideshow
  document.querySelector(".slideshow").style.animation =
    "slideshow 24s infinite";
});
