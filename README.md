# pokemonCardGenerator-

https://scegob.github.io/pokemonCardGenerator-/

This pokemon card generator was from a code along with coding artist 

https://codingartistweb.com/2021/09/pokemon-card-generator-javascript/

This project helped me get a better understanding of how APIs and dom munipulation works and also got to use https://pokeapi.co/

A piece of code that I am proud of is (code below) because I did not know that you could implement html inside of javaScript and makes it a lot more dynamic than having to type out this code for each pokemon.

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
    
    A peice of code that I was having problems with was (code below) to style the the half circle behind the pokemon because for some reason it was not protraying it
    
    let styleCard = (color) => {
    card.style.background = `radial-gradient(circle at 50% 
        0%, ${color} 36%, #ffffff 36%)`;
       card.querySelectorAll(".types span").forEach(
        (typeColor) => {
        typeColor.style.background = color
       });
};

The reason why I was having problems with this code was because I initially left background inside the backticks from when I cut and pasted it from the css file.

let styleCard = (color) => {
    card.style.background = `background: radial-gradient(circle at 50% 
        0%, ${color} 36%, #ffffff 36%)`;
       card.querySelectorAll(".types span").forEach(
        (typeColor) => {
        typeColor.style.background = color
       });
};


