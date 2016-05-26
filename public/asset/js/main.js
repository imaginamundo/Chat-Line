function addActive(idClick, idClass) {
	var clickedElement = document.getElementById(idClick),
		activeElement = document.getElementById(idClass);

	clickedElement.addEventListener('click', function(e) {
		activeElement.classList += ('active');
		
		e.preventDefalt();
	})
}