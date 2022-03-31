var navButtons = document.getElementsByClassName("nav__menu-button");

function resetMenuButtons() {
	for (let i = 0; i < navButtons.length; i++) {
		navButtons[i].parentElement.classList.remove("active");
	}
}

for (let i = 0; i < navButtons.length; i++) {
	navButtons[i].addEventListener("click", function () {
		resetMenuButtons();
		navButtons[i].parentElement.classList.add("active");
	});
}

window.addEventListener("scroll", function () {
	let elements = document.getElementsByClassName("set__hidden__section");
	let elementsTitle = document.getElementsByClassName("set__hidden__title");
	let screenSize = window.innerHeight;

	for (var i = 0; i < elementsTitle.length; i++) {
		let element = elementsTitle[i];

		if (element.getBoundingClientRect().top < screenSize) {
			element.classList.add("visible");
		} else {
			element.classList.remove("visible");
		}
	}

	for (var i = 0; i < elements.length; i++) {
		let element = elements[i];

		if (element.getBoundingClientRect().top < screenSize) {
			element.classList.add("visible");
		} else {
			element.classList.remove("visible");
		}
	}
});

window.addEventListener("wheel", () => {
	resetMenuButtons();
});

window.addEventListener("touchmove", function () {
	const sidebar = document.getElementById("sidebar");
	document
		.getElementById("navMobile-menu")
		.classList.remove("nav__mobile-visible");
	if (sidebar.style.display === "unset") {
		document
			.getElementById("button-sidebar")
			.classList.remove("fa-caret-right");
		document.getElementById("button-sidebar").classList.add("fa-caret-left");
		sidebar.style.display = "none";
	}
});
