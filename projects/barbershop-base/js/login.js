var enter    = document.querySelector(".login"),
	popup    = document.querySelector(".modal-content-form"),
	overlay  = document.querySelector(".modal-overlay"),
	close    = popup.querySelector(".modal-content-close"),
	form     = popup.querySelector("form"),
	login    = popup.querySelector("[name=login]"),
	password = popup.querySelector("[name=password]"),
	storage  = localStorage.getItem("login");

	enter.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.add("modal-content-form-show");
		overlay.classList.add("modal-overlay-show");
		if (storage) {
			login.value = storage;
			password.focus();
		}	else {
				login.focus();
			}
	});

	close.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.remove("modal-content-form-show");
		overlay.classList.remove("modal-overlay-show");
		popup.classList.remove("modal-content-error");
	});

	overlay.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.remove("modal-content-form-show");
		overlay.classList.remove("modal-overlay-show");
		popup.classList.remove("modal-content-error");
	});

	form.addEventListener("submit", function(event) {
		if (!login.value || !password.value) {
			event.preventDefault();
			popup.classList.add("modal-content-error");
		}	else {
				localStorage.setItem("login", login.value);
			}
	});
	
	window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
			if (popup.classList.contains("modal-content-form-show") && overlay.classList.contains("modal-overlay-show")) {
				popup.classList.remove("modal-content-form-show");
				overlay.classList.remove("modal-overlay-show");
				popup.classList.remove("modal-content-error");
			}
		}
	});