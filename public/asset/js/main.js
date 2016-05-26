'use strict';

(function() {
	openModal();
	closeParent();
})();

// modal
function openModal() {
	var modal = document.getElementsByClassName("open-modal");

	for(var i = (modal.length - 1); i >= 0; i--) {
		modal[i].addEventListener('click', function(e) {
			var modalTarget = this.getAttribute("modal");
			
			document.getElementById(modalTarget).classList.add('active');

			e.preventDefault();
		})
	}
}

// close parent (remove active class)
function closeParent() {
	var closeParent = document.getElementsByClassName("close");

	for(var i = (closeParent.length - 1); i >= 0; i--) {
		closeParent[i].addEventListener('click', function(e) {
			this.parentNode.classList.remove('active');

			e.preventDefault();
		})
	}
}
