// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const baseImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const container = document.getElementById('container');

for (let i = 1; i <= 1017; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon')

    const image = document.createElement('img');
    image.src = `${baseImage}${i}.png`

    const label = document.createElement('span');
    label.innerText = `#${i}`

    pokemon.appendChild(image);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}