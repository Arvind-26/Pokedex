async function searching() {
    let pokemon = document.getElementById("input").value.toLowerCase()
    // console.log(pokemon)

    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data2 = await data.json()
    // console.log(data2)

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
var pokemon_img = [];
async function allpokemon() {
    try {
        let th1 = 1, th2 = 201, th3 = 401, th4 = 601, th5 = 801

        for (th1; th1 < th2; th1++) {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${th1}`)
            let data = await response.json()
            pokemon[th1] = data.name
            pokemon_img[th1] = data.sprites.front_default;
        }

        for (th2; th2 < th3; th2++) {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${th2}`)
            let data = await response.json()
            pokemon[th2] = data.name
            pokemon_img[th2] = data.sprites.front_default;
        }

        for (th3; th3 < th4; th3++) {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${th3}`)
            let data = await response.json()
            pokemon[th3] = data.name
            pokemon_img[th3] = data.sprites.front_default;
        }

        for (th4; th4 < th5; th4++) {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${th4}`)
            let data = await response.json()
            pokemon[th4] = data.name
            pokemon_img[th4] = data.sprites.front_default;
        }

        try {
            while (true) {

                const response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${th5}`);
                if (!response.ok) {
                    break;
                }
                let data = await response.json()
                pokemon[th5] = data.name
                pokemon_img[th5] = data.sprites.front_default;
                th5++;
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }




    } catch (error) {
        console.log(error);
    }



}

async function ajj() {
    await allpokemon()
    console.log(pokemon)
    let i = 1
    pokemon.forEach(element => {

        let htmlll = `<div class="chotacard">
        <img class="cardimg" height="150px" src="${pokemon_img[i]}" alt="">
        <span class="cardname">${element}</span>
        </div>`;
        i++;

        document.getElementById("allcards").innerHTML += htmlll;
    });

}
ajj()