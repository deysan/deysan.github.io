var mapOpen  = document.querySelector(".open-map"),
	mapPopup = document.querySelector(".modal-content-map"),
	mapClose = mapPopup.querySelector(".modal-content-close");

	mapOpen.addEventListener("click", function(event) {
		event.preventDefault();
		mapPopup.classList.add("modal-content-map-show");
		overlay.classList.add("modal-overlay-show");
	});

	mapClose.addEventListener("click", function(event) {
		event.preventDefault();
		mapPopup.classList.remove("modal-content-map-show");
		overlay.classList.remove("modal-overlay-show");
	});

	overlay.addEventListener("click", function(event) {
		event.preventDefault();
		mapPopup.classList.remove("modal-content-map-show");
		overlay.classList.remove("modal-overlay-show");
	});

	window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
			if (mapPopup.classList.contains("modal-content-map-show") && overlay.classList.contains("modal-overlay-show")) {
				mapPopup.classList.remove("modal-content-map-show");
				overlay.classList.remove("modal-overlay-show");
			}
		}
	});