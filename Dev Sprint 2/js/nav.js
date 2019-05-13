function openNav() {
  document.getElementById("nav-overlay").style.display = "inline-block";
  document.getElementById("nav-hide").style.display = "none";
  document.getElementById("nav-show").style.display = "inline-block";
};

function closeNav() {
  document.getElementById("nav-overlay").style.display = "none";
  document.getElementById("nav-show").style.display = "none";
  document.getElementById("nav-hide").style.display = "inline-block";
};
