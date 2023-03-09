/*
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.

Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima 
sulla creazione del markup statico: costruiamo il container
e inseriamo l'immagine grande in modo da poter stilare lo slider.

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali
per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra,
l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

Milestone 2:
Aggiungere il **ciclo infinito** del carosello. 
Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, 
la miniatura che deve attivarsi sarà l'ultima e viceversa 
per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) 
l’immagine attiva dovrà cambiare alla successiva.

BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
*/


const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// Creo variabili per bersagliare elementi html
const upArrowEl = document.getElementById("upArrow");
const downArrowEl = document.getElementById("downArrow");
const activeImgEl = document.getElementById("carouselActiveImg");
const carouselEl = document.getElementById("carousel");



// Creo una variabile di indice
let index = 0;

// Faccio in modo che all'apertura della pagina web sia visualizzata la prima immagine dell'array
activeImgEl.src = images[index].image;

// Creo una variabile per utilizzare in pagina la proprietà title dellgli oggetti
let titleEl = document.createElement("div");
titleEl.className = "title";
titleEl.innerHTML = images[index].title;
carouselEl.append(titleEl);

// Creo una variabile per utilizzare in pagina la proprietà text dellgli oggetti
let textEl = document.createElement("div");
textEl.className = "text";
textEl.innerHTML = images[index].text;
carouselEl.append(textEl);

// Al click della freccia su
upArrowEl.addEventListener("click", function() {
    // SE la variabile index è uguale alla numero che corrisponde alla lunghezza dell'array
    if(index == images.length - 1){
        // l'index torna a zero mostrando la prima immagine del carosello
        index = 0
    // Altrimenti
    } else {
        // l'indice aumenta così da mostrarci l'immagine successiva ad ogni click
        index++;

    };

    activeImgEl.src = images[index].image;
    titleEl.innerHTML = images[index].title;
    textEl.innerHTML = images[index].text;

});

// Al click della freccia giù
downArrowEl.addEventListener("click", function() {

    if(index == 0){

        index = images.length - 1;

    } else {

        index--;

    };

    activeImgEl.src = images[index].image;
    titleEl.innerHTML = images[index].title;
    textEl.innerHTML = images[index].text;
});














 