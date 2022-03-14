const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    console.log(pokeInput)
    // pokeInput = pokeInput.toLocaleLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((respuesta) => {
        if(respuesta.status != "200") {
            console.log(respuesta);
            pokeImage('../assets/img/emptyPokeball.png')
        } else {
            return respuesta.json();
        }
    }).then((data) => {
        console.log(data)
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg)
        pokeImage(pokeImg)
    })
}

fetchPokemon();

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

// pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png")
