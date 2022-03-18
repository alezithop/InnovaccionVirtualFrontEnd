const fetchPokemon = () => {
    const nombrePokemon = document.getElementById("cajaBusquedaPokemon");
    let pokemonAbuscar = nombrePokemon.value.toLowerCase();
    console.log(pokemonAbuscar)
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonAbuscar}`;
    fetch(url).then((respuesta) => {
        if(respuesta.status != "200") {
            console.log(respuesta);
            definirImagenPokemon('./assets/img/emptyPokeball.png')
            document.getElementById("nombrePokemon").value = "Pokémon Not Found."
        } else {
            return respuesta.json();
        }
    }).then((data) => {
        console.log(data)

        let pokemonImagen = data.sprites.front_default;
        console.log(pokemonImagen)
        definirImagenPokemon(pokemonImagen)

        let pokemonNombre = data.name;
        const pokemonNombrePrimeraLetraMayuscula = pokemonNombre.charAt(0).toUpperCase() + pokemonNombre.slice(1);
        console.log(pokemonNombrePrimeraLetraMayuscula)

        let pokemonNumero = data.id;
        const numeroYnombre = (pokemonNumero + " - " + pokemonNombrePrimeraLetraMayuscula)
        console.log(numeroYnombre)

        definirNombrePokemon(numeroYnombre)

        let tiposPokemon = "";

        let pokemonTipo = data.types;

        let i = 0;
        
        pokemonTipo.forEach(tipo => {
            if(i == 0) {
                tiposPokemon = tiposPokemon + tipo;
            }
            else {
                tiposPokemon = tiposPokemon + ", " + tipo;
            }
        });

        console.log(tiposPokemon);

        definirTipos(tiposPokemon)

        let pesoPokemon = data.weight;
        let alturaPokemon = data.height;

        definirPeso(pesoPokemon);
        definirAltura(alturaPokemon);
    })
}

const definirImagenPokemon = (url) => {
    const pokeImg = document.getElementById("imagenPokemon");
    pokeImg.src = url;
}

const definirNombrePokemon = (name) => {
    const pokemonName = document.getElementById("nombrePokemon");
    pokemonName.innerText = name;
}

const definirTipos = (tipos) => {
    const pokemonTipos = document.getElementById("tipoPokemon");
    pokemonTipos.innerHTML = tipos;
}

const definirPeso = (peso) => {
    const pokemonPeso = document.getElementById("pesoPokemon")
    pokemonPeso.innerHTML = peso + " KG";
}

const definirAltura = (altura) => {
    const pokemonAltura = document.getElementById("alturaPokemon")
    pokemonAltura.innerHTML = altura + " M";
}