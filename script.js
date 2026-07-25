// ## this runs the aos animations, imported the library in the html file
AOS.init({
  duration: 800,
  once: true,
  offset: 60
});

var menuBtn = document.getElementById("menuBtn");
var navLinks = document.getElementById("navLinks");

// ## checking these exist first, don't wanna get an error if i rename something later
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });

  // ## closes the mobile menu once you actually click a link
  var links = navLinks.querySelectorAll("a");
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
    });
  });
}

// ## makes the navbar get a shadow once you scroll down a bit
var navbar = document.getElementById("navbar");

if (navbar) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 40) {
      navbar.style.boxShadow = "0 6px 20px rgba(0,0,0,0.35)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });
}