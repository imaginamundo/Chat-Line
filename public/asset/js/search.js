(function() {
	// get parameters on Url
	function getParameterByName(name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	// Add search to text
	var keyParameter = getParameterByName('key'),
		keyParameterText = document.getElementById('key-parameter');

	if(keyParameter) {
		keyParameterText.innerHTML = keyParameter;
		document.getElementById('search').value = keyParameter;
	}
	else {
		keyParameterText.innerHTML = '<span class="wordart" title="NADA">NADA</span>';
		document.getElementsByClassName('without-result')[0].classList.add('active');
	}
})();