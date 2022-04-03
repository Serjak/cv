const UrlEs = "../json/es.json";
const UrlEn = "../json/en.json";
const requestEs = new XMLHttpRequest();
requestEs.open("GET", UrlEs);
requestEs.responseType = "json";
requestEs.send();

const requestEn = new XMLHttpRequest();
requestEn.open("GET", UrlEn);
requestEn.responseType = "json";
requestEn.send();

function language(i) {
	var dict;
	if (i == "en") {
		requestEn.onload;
		dict = requestEn.response;
	} else {
		requestEs.onload;
		dict = requestEs.response;
	}

	const elements1 = document.querySelectorAll(`[id^="lg"]`);
	elements1.forEach((element) => {
		element.textContent = dict[element.id];
	});
}
