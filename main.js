// Get the button element
var scrollBtn = document.getElementById("scrollBtn");

// Attach a click event listener to the button
scrollBtn.addEventListener("click", function() {
  // Scroll to the bottom of the page
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
});