var writeUsLink = document.querySelector('.write-link');
var writeUsPopup = document.querySelector('.modal-feedback');
var writeUsClose = writeUsPopup.querySelector('.modal-close');
var writeUsForm = writeUsPopup.querySelector('.modal-form');
var writeUsName = document.querySelector('[name=name]');
var writeUsEmail = writeUsPopup.querySelector('[name=email]');
var writeUsMessage = writeUsPopup.querySelector('[name=message]');
var mapLink = document.querySelector('.modal-map-link');
var mapPopup = document.querySelector('.modal-map');
var mapClose = mapPopup.querySelector('.modal-close');



writeUsLink.addEventListener('click', function(evt) {
	evt.preventDefault();
	writeUsPopup.classList.add('modal-show');
	writeUsName.focus();
});

writeUsClose.addEventListener('click', function(evt) {
	evt.preventDefault();
	writeUsPopup.classList.remove('modal-show');
	writeUsName.classList.remove('modal-input-invalid');
	writeUsEmail.classList.remove('modal-input-invalid');
	writeUsMessage.classList.remove('modal-input-invalid');
});

writeUsForm.addEventListener('submit', function(evt) {
	if (!writeUsName.value) {
		evt.preventDefault();
		writeUsName.classList.add('modal-input-invalid');
	} else {
		writeUsName.classList.remove('modal-input-invalid');
	}

	if (!writeUsEmail.value) {
		evt.preventDefault();
		writeUsEmail.classList.add('modal-input-invalid');
	} else {
		writeUsEmail.classList.remove('modal-input-invalid');
	}

	if (!writeUsMessage.value) {
		evt.preventDefault();
		writeUsMessage.classList.add('modal-input-invalid');
	} else {
		writeUsMessage.classList.remove('modal-input-invalid');
	}

});

window.addEventListener('keydown', function(evt) {
	if (evt.keyCode === 27) {
		if (writeUsPopup.classList.contains('modal-show')) {
			writeUsPopup.classList.remove('modal-show');
			writeUsPopup.classList.remove('modal-show');
			writeUsName.classList.remove('modal-input-invalid');
			writeUsEmail.classList.remove('modal-input-invalid');
			writeUsMessage.classList.remove('modal-input-invalid');
		}
	}
});

mapLink.addEventListener('click', function(evt) {
	evt.preventDefault();
	mapPopup.classList.add('modal-show');
});

mapClose.addEventListener('click', function(evt) {
	evt.preventDefault();
	mapPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function(evt) {
	if (evt.keyCode === 27) {
		if (mapPopup.classList.contains('modal-show')) {
			mapPopup.classList.remove('modal-show');
		}
	}
});
