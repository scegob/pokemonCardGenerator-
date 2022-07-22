/* An object that contains the hex color codes for each pokemon type. */
const typeColor = {
  bug: "#26de81",
  dragon: "#ffeaa7",
  electric: "#fed330",
  fairy: "#FF0069",
  fighting: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190FF",
}
/* Creating a constant variable called url and assigning it the value of the pokeapi url. */
const url = "https://pokeapi.co/api/v2/pokemon/";
/* Creating a constant variable called card and assigning it the value of the element with the id of
card. */
const card = document.getElementById("card");
/* Creating a constant variable called btn and assigning it the value of the element with the id of
btn. */
const btn = document.getElementById("btn");

/**
 * It generates a random number between 1 and 150, combines it with the pokeApi url, fetches the
 * generated url, and then passes the data to the generateCard function.
 */
let getPokeData = () => {
    // Generate a random between 1 and 150
    let id = Math.floor(Math.random() * 150) + 1;
    console.log(id);
    // Combine the pokeApi url with pokemon id
    const finalUrl = url + id;
    // Fetch generated URL
    fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        generateCard(data);
    });
};

//Generate Card

let generateCard = (data) => {
    //Get necessary data and assign it to variables
    console.log(data);
    const hp = data.stats[0].base_stat;
    console.log(hp);
    const imgSrc = data.sprites.other.dream_world.front_default;
    const pokeName = data.name[0].toUpperCase() + data.name.slice(1);
    const statAttack = data.stats[1].base_stat;
    const statDefense = data.stats[2].base_stat;
    const statSpeed = data.stats[5].base_stat;

    // Set themeColor based on pokemon type
    const themeColor = typeColor[data.types[0].type.name];
    console.log(themeColor);

/* Assigning the innerHTML of the card element to the HTML code that is inside the backticks. */
    card.innerHTML = `
    
    <p class="hp">
                <span>Hp</span>
                ${hp}
            </p>
            <img src=${imgSrc}>
            <h2 class="poke-name">${pokeName}</h2>
            <div class="types">
                
            </div>
                <div class="stats">
                    <div>
                        <h3>${statAttack}</h3>
                        <p>Attack</p>
                    </div>
                    <div>
                        <h3>${statDefense}</h3>
                        <p>Defense</p>
                    </div>
                    <div>
                        <h3>${statSpeed}</h3>
                        <p>Speed</p>
                    </div>
                </div>
    `;
    /* Calling the appendTypes function and passing the data.types as an argument. */
    appendTypes(data.types);
    /* Calling the styleCard function and passing the themeColor variable as an argument. */
    styleCard(themeColor);
};

/**
 * It takes an array of objects, and for each object, it creates a span element, sets the text content
 * of the span to the name property of the object, and appends the span to the element with the class
 * "types".
 * @param types - [{slot: 1, type: {name: "normal", url: "https://pokeapi.co/api/v2/type/1/"}}, {slot:
 * 2, type: {name: "flying", url: "https://pokeapi.co/api/
 */
let appendTypes = (types) => {
    console.log(types);
    types.forEach(item => {
        let span = document.createElement("SPAN");
        span.textContent = item.type.name;
        console.log(span);
        document.querySelector(".types").appendChild(span)
    });
};
/**
 * The function styleCard takes a color as an argument and sets the background of the card to a radial
 * gradient with the color as the first color and white as the second color. It also sets the
 * background of all the type spans to the color.
 * @param color - the color of the card
 */
let styleCard = (color) => {
    card.style.background = `radial-gradient(circle at 50% 
        0%, ${color} 36%, #ffffff 36%)`;
       card.querySelectorAll(".types span").forEach(
        (typeColor) => {
        typeColor.style.background = color
       });
};

/* Listening for a click event and then calling the getPokeData function. */
btn.addEventListener("click", getPokeData);
/* Calling the getPokeData function when the page loads. */
window.addEventListener("load", getPokeData);
