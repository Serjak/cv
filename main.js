// Mobile Menu Toggle Button JavaScript
function myFunction() {
    let x = document.getElementById("mobile-menu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function between(x, min, max) {
    return x >= min && x <= max;
  }

  function softRaiting(appName, stars, altText) {
    if (altText == null) {
      altText = appName;
    }
    let divElement = document.createElement("div");
    divElement.className = 'app-name';
    divElement.id = appName.toLowerCase() + "-id";

    let linkElement = document.createElement("a");
    linkElement.href = 'http://www.google.com/search?ie=utf-8&btnI=&q=' + appName;
    linkElement.target = 'blank';

    let imgElement = document.createElement('img');
    imgElement.className = "app-logo";
    imgElement.src = "/images/" + appName.toLowerCase() + "-logo.png";
    imgElement.title = altText;
    linkElement.appendChild(imgElement);
    divElement.appendChild(linkElement);
    divElement.appendChild(document.createElement('br'));

    let starsRaiting = '';
    if (between(stars,1,5)) {
      for (let i = 1; i <= stars; i++) {
        let iElement = document.createElement('i');
        iElement.className = "fa-solid fa-star checked";
        divElement.appendChild(iElement);
      }
      let rest = 5 - stars;
      for (let i = 1; i <= rest; i++) {
        let iElement = document.createElement('i');
        iElement.className = "fa-solid fa-star";
        divElement.appendChild(iElement);
      }
    } else {
      for (let i = 1; i <= 5; i++) {
        let iElement = document.createElement('i');
        iElement.className = "fa-solid fa-star";
        divElement.appendChild(iElement);
      }
    }
    document.getElementById("skillsContainer").appendChild(divElement);
  }

// function bounceTitles(id,sectionId) {
//   let titleIdElement = document.getElementById(id);
//   let sectionIdElement = document.getElementById(sectionId);

//   sectionIdElement.classList.add('visible');
//   titleIdElement.classList.add('visible');
//   titleIdElement.classList.add("animate__animated");
//   titleIdElement.classList.add("animate__bounceInLeft");
//   sectionIdElement.classList.add("animate__animated");

//   let randomAnimation = ["animate__flipInX","animate__lightSpeedInLeft","animate__zoomIn","animate__zoomInUp"];

//   sectionIdElement.classList.add(randomAnimation[Math.floor(Math.random() * randomAnimation.length)]);
// }


window.addEventListener('scroll', function()  {
  let elements = document.getElementsByClassName('set__hidden__section');
  let elementsTitle = document.getElementsByClassName('set__hidden__title');
  let screenSize = window.innerHeight;

  for(var i = 0; i < elementsTitle.length; i++) {
    let element = elementsTitle[i];

    if(element.getBoundingClientRect().top < screenSize) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  }
  
  for(var i = 0; i < elements.length; i++) {
    let element = elements[i];

    if(element.getBoundingClientRect().top < screenSize) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  }
});


function onClick(element) {
  document.getElementById("modal__img").src = element.src;
  document.getElementById("gallery__modal").style.display = "block";
}