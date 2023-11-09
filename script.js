
// Function to get the background color of the body and apply it to the navigation bar
function setNavbarBackgroundColor() {
    var bodyBackgroundColor = getComputedStyle(document.body).backgroundColor;
    var navbar = document.getElementById("navbar");
    navbar.style.backgroundColor = bodyBackgroundColor;
  }

// Function to toggle the side menu
function toggleSideMenu() {
  var body = document.querySelector("body");
  body.classList.toggle("show-side-menu");
}



  
  // Call the function when the page loads
  setNavbarBackgroundColor();