function between(x, min, max) {
	return x >= min && x <= max;
}

function softRaiting(appName, stars, altText) {
	if (altText == null) {
		altText = appName;
	}
	let divElement = document.createElement("div");
	divElement.className = "app-name";
	divElement.id = appName.toLowerCase() + "-id";

	let linkElement = document.createElement("a");

	fetch("../json/apps.json")
		.then((response) => {
			return response.json();
		})
		.then((appsUrl) => {
			linkElement.href = appsUrl[appName];
		});

	linkElement.target = "blank";

	let imgElement = document.createElement("img");
	imgElement.className = "app-logo";
	imgElement.src = "./images/" + appName.toLowerCase() + "-logo.png";
	imgElement.title = altText;
	linkElement.appendChild(imgElement);
	divElement.appendChild(linkElement);
	divElement.appendChild(document.createElement("br"));

	let starsRaiting = "";
	if (between(stars, 1, 5)) {
		for (let i = 1; i <= stars; i++) {
			let iElement = document.createElement("i");
			iElement.className = "fa-solid fa-star checked";
			divElement.appendChild(iElement);
		}
		let rest = 5 - stars;
		for (let i = 1; i <= rest; i++) {
			let iElement = document.createElement("i");
			iElement.className = "fa-solid fa-star";
			divElement.appendChild(iElement);
		}
	} else {
		for (let i = 1; i <= 5; i++) {
			let iElement = document.createElement("i");
			iElement.className = "fa-solid fa-star";
			divElement.appendChild(iElement);
		}
	}
	document.getElementById("skillsContainer").appendChild(divElement);
}

function onClick(element) {
	document.getElementById("modal__img").src = element.src;
	document.getElementById("gallery__modal").style.display = "block";
}

function toggleSideBar() {
	const sidebar = document.getElementById("sidebar");
	const sidebarButton = document.getElementById("button-sidebar");
	if (sidebar.style.display === "unset") {
		sidebarButton.classList.remove("fa-caret-right");
		sidebarButton.classList.add("fa-caret-left");
		sidebar.style.display = "none";
	} else {
		sidebarButton.classList.remove("fa-caret-left");
		sidebarButton.classList.add("fa-caret-right");
		sidebar.style.display = "unset";
	}
}

function mobileMenu() {
	const navMobileMenu = document.getElementById("navMobile-menu");
	navMobileMenu.classList.toggle("nav__mobile-visible");
}

function hideMenu() {
	document
		.getElementById("navMobile-menu")
		.classList.remove("nav__mobile-visible");
}

function insertYear() {
	let year = new Date();
	document.write(year.getFullYear());
}
