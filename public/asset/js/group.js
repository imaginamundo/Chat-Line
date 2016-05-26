'use strict';


(function() {
	// Select chat
	var users, makeActive;

	users = document.querySelectorAll('#users a');

	makeActive = function () {
		for (var i = 0; i < users.length; i++)
		users[i].classList.remove('active');

		this.classList.add('active');
	};

	for (var i = 0; i < users.length; i++)
	users[i].addEventListener('mousedown', makeActive);

	// Share
	var shareButton = document.getElementById('share');

	shareButton.addEventListener('click',function(e) {
		document.getElementById('configuration-window').classList.remove('active');
		document.getElementById('share-window').classList.toggle('active');

	    e.preventDefault();
	}, false);

	// Share input url
	var shareInput = document.getElementById('share-link');
	shareInput.value = window.location.href;

	// Share input select all url
	shareInput.addEventListener('click', function() {
		this.setSelectionRange(0, this.value.length);
	});

	// Go to last message
	function goToLastMessage() {
		document.getElementById('last').scrollIntoView(true);
	}

	// Configuration
	var configurationButton = document.getElementById('configuration');

	configurationButton.addEventListener('click',function(e) {
		document.getElementById('share-window').classList.remove('active');
		document.getElementById('configuration-window').classList.toggle('active');

	    e.preventDefault();
	}, false);

	goToLastMessage();

	// Submit message
	var sendForm = document.getElementById('send-message'),
		sendInput = document.querySelectorAll('#send-message input');
})();