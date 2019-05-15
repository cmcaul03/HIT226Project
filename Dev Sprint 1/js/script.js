$(document).ready(function() {

	/* If mobile browser, prevent click on parent nav item from redirecting to URL */
	if(is_touch_device()) {

		$('#secondarymenu li > ul').each(function (index, elem) {
			/* Option 1: Use this to modify the href on the <a> to # */

			/* OR Option 2: Use this to keep the href on the <a> intact but prevent the default action */
			$(elem).prev('a').click(function(event) {
  				event.preventDefault();
			});
		});
	}

});

function is_touch_device() {
  return !!('ontouchstart' in window);
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topbutton").style.display = "block";
  } else {
    document.getElementById("topbutton").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
