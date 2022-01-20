import {APIKEY} from "./config.js";

let films = [];

const span = document.getElementsByClassName("close")[0];
const film_container = document.getElementById("result");
const input = document.getElementById("search");
const form = document.querySelector("form");


async function fetchFilm (search){
    await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${APIKEY}`)
    .then((res) =>res.json())
    .then((data)=> console.log(films) (films = data.Search))
    .catch((error)=> console.log(error))
}

function display(){
    if (films === undefined) {film_container.innerHTML = "<h2>Aucun résultat</h2>"
    console.log(films)
} else {
        films.map((film)=>{
            const li =  document.createElement("li")
            li.classList.add("card")
    li.innerHTML = 
    `
    <h1> ${film.Title}</h1>
    <img src="${film.Poster}">
    
    `
    const btn = document.createElement("button")
    btn.innerText = "Click me!"
    
    li.insertAdjacentElement("beforeend",btn)
    const div = document.createElement("div")
    div.classList.add("modal")
    div.innerHTML = 
    `<div class="modal-content">
    <span class="close">&times;</span>
    <p>Titre : ${film.Title}</p>
    <h2> Type : ${film.Type}</h2>
    <h2> Année sortie ${film.Year}</h2>
    <h2> N° Imdb : ${film.imdbID}</h2>
    </div>`
    div.style.display = "none";
    li.insertAdjacentElement("beforeend",div)
    btn.addEventListener("click",()=>{
        div.style.display = "block"
    })
    
    div.addEventListener("click",(event)=>{
        console.log(event.target.classList.contains("close"));
        if (event.target.classList.contains("close") ) {
            console.log(div)
            div.style.display = "none";
        }
    })
    
    film_container.insertAdjacentElement("beforeend",li)
    console.log(film)
})}
}




input.addEventListener("input",(e)=>{
    film_container.innerHTML=""

    fetchFilm(e.target.value);
})

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    display();
})



// When the user clicks on the button, open the modal

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
