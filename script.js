async function searching() {
    let pokemon = document.getElementById("input").value.toLowerCase()

    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data2 = await data.json()

    let name = data2.name;
    let height = data2.height;
    let weight = data2.weight;
    let photo = data2.sprites.front_default;
    let type = data2.types[0].type.name
    let html = `<div id="bdacard" class="bdacard">
    </div>`

    document.getElementById("cards").innerHTML = html

    let htmll = `<img height="200px" src="${photo}" alt="">
    <div>
    <span id="namee">${name}</span>
    <span>Height: &nbsp;&nbsp;&nbsp;${height} foot</h4>
    <span>Weight: &nbsp;&nbsp;${weight} kg</span>
    <span>Type: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${type}</span>
    </div>`

    setTimeout(() => {
        document.getElementById("bdacard").innerHTML = htmll
    }, 500)
}
var pokemon = [];
async function allpokemon() {
    try {
        let i = 0
        // while (i < 13) {
            for (let j = i * 100 + 1; j <= (i + 1) * 100; j++) {
                const url = `https://pokeapi.co/api/v2/pokemon/${j}`;
                pokemon.push(await fetch(url).then(res => res.json()));
            }
            await ajj(pokemon)
            pokemon = []
        //     i++
        // }

    } catch (error) {
        console.log(error);
    }
}

allpokemon()
async function ajj(poke) {
    let i = 1
    poke.forEach(element => {

        let htmlll = `<div class="chotacard">
        <img class="cardimg" height="150px" src="${element.sprites.front_default}" alt="">
        <span class="cardname">${element.forms[0].name}</span>
        </div>`;
        i++;

        document.getElementById("allcards").innerHTML += htmlll;
    });

}