'use strict';


(function() {
	// Select chat
	var users, makeActive;

	users = document.querySelectorAll('#users a');

	makeActive = function (e) {
		for (var i = 0; i < users.length; i++)
		users[i].classList.remove('active');

		this.classList.add('active');

		e.preventDefault();
	};

	for (var i = 0; i < users.length; i++)
	users[i].addEventListener('click', makeActive);

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
	// Facebook
	document.getElementById('share-facebook').href = ('https://www.facebook.com/sharer/sharer.php?u=' + shareInput.value);
	
	// Google Plus
	document.getElementById('share-google-plus').href = ('https://plus.google.com/share?url=' + shareInput.value);

	// Twitter
	document.getElementById('share-twitter').href = ('https://twitter.com/home?status=' + shareInput.value);

	

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