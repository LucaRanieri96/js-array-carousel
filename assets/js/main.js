// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

// Milestone #2
/* 
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript. 
*/

// TOOLS
// • array
// • const/let
// • querySelector
// • addEventListener
// • increment/decrement

// array con 5 immagini
const images = [
  "./assets/img/01.webp",
  "./assets/img/02.webp",
  "./assets/img/03.webp",
  "./assets/img/04.webp",
  "./assets/img/05.webp",
];
// definisco le variabili dove mettere le immagini nella dom
const imagesElement = document.querySelector('.images')
console.log(imagesElement);

let activeImage = 0

// definisco ciclo for per inserire le immagini una per volta dentro la dom
for (let i = 0; i < images.length; i++) {
  const imgSrc = images[i];
  const activebehavior = i === activeImage ? 'active' : ''
  const imgElement = `<img class="img-fluid ${activebehavior}" src="${imgSrc}" alt="">`
  console.log(imgElement);
  // InsertAjacentHTML
  imagesElement.insertAdjacentHTML('beforeend', imgElement)
}

// seleziono tutte le img per potergli dare l'active dopo 
const slideImagesElements = document.querySelectorAll('img')  
// seleziono il pulsante UP e creo una variabile
const nextEl = document.querySelector('.position_up')
// ascolto il pulsante UP
nextEl.addEventListener('click', function () {
  console.log('cliccato up');
  console.log(slideImagesElements); //array[index]
  
  // seleziono la slide corrente
  const currentSlide = slideImagesElements[activeImage]
  console.log(currentSlide);
  
  // rimuovo dalla slide corrente la classe active
  currentSlide.classList.remove('active')

  // incremento il valore della variabile nel ciclo for sopra
  activeImage++

  // seleziono la prossima immagine
  console.log(activeImage);
  const nextImage = slideImagesElements[activeImage]

  // e le aggiungo la classe active
  console.log(nextImage);
  nextImage.classList.add('active')

})
