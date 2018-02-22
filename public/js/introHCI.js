'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".likeBtn").click(like_btn);
}

function like_btn(e) {
	e.preventDefault();
	console.log('button clicked'); 
	ga('create', 'UA-114655521-1', 'auto');
	ga("send", "event", "Like", "click");
}