import {APIKEY} from "./config.js";

films =[];

const span = document.getElementsByClassName("close")[0];
const film_container = document.getElementById("result");
const input = document.getElementById("search");
const form = document.querySelector("form");


async function fetchFilm (search){
    await fetch(`https://www.omdbapi.com/?s=${search}&${APIKEY}`)
    .then((res) =>res.json())
    .then((data)=> (films = data.Search))
}

function display(){

  films.map((film)=>{
    const li =  document.createElement("li")
    li.classList.add("card")
    li.innerHTML = 
    `
    <h1> ${film.Title}</h1>
    <img src="${film.Poster}">
    <h2> ${film.Year}</h2>

    `
    const btn = document.createElement("button")
    btn.innerText = "Click me!"

    li.insertAdjacentElement("beforeend",btn)
    const div = document.createElement("div")
    div.classList.add("modal")
    div.innerHTML = 
    `<div class="modal-content">
    <span class="close">&times;</span>
    <p>${film.Title}</p>
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
   
    // <li class='card'>
    
    // <h1> ${film.Title}</h1>
    // <img src="${film.Poster}">
    // <h2> ${film.Year}</h2>
    
    // <button class="bbtn" id="myBtn" >Click Me!</button>
    // <div id="myModal" class="modal">
    
    // <div class="modal-content">
    // <span class="close">&times;</span>
    // <p>Some text in the Modal..</p>
    // </div>
    
    // </div>
    // </li>
    // `
    film_container.insertAdjacentElement("beforeend",li)
})
}

input.addEventListener("input",(e)=>{
    
    fetchFilm(e.target.value);
})

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    fetchFilm(e.target.value);
    display();
})



// When the user clicks on the button, open the modal

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
