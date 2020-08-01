function dogLinkCreator (dogs) {
  let links = [];
  const names = Object.keys(dogs);

  names.forEach( function (name) {
    let dogLink = document.createElement('li');
    let dogInfo = document.createElement('a');

    dogInfo.innerHTML = name;
    dogInfo.href = dogs[name];

    dogLink.classList.add('dog-link');
    dogLink.appendChild(dogInfo);

    links.push(dogLink);
  });
  
  return links;
}

function attachDogLinks(dogs) {
  let dogLinks = dogLinkCreator(dogs);

  let list = document.querySelector('.drop-down-dog-list');
  dogLinks.forEach( function (link) {
    list.appendChild(link);
  });
}

const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

attachDogLinks(dogs);

const handleLeave = function () {
  
  let dogLinks = document.querySelectorAll('.hover');
  
  dogLinks.forEach( function (link) {
    link.classList.remove('hover');
    link.classList.add('dog-link');
  })
};

const handleEnter = function () {
  
  let dogLinks = document.querySelectorAll('.dog-link');

  dogLinks.forEach( function (link) {
    link.classList.add('hover');
    link.classList.remove('dog-link');
  })
};

const nav = document.querySelector('.drop-down-dog-nav');

nav.addEventListener('mouseenter', handleEnter);
nav.addEventListener('mouseleave', handleLeave);

