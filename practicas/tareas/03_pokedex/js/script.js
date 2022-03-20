const fetchPokemon = () => {
    const nombrePokemon = document.getElementById("cajaBusquedaPokemon");
    let pokemonAbuscar = nombrePokemon.value.toLowerCase();
    console.log(pokemonAbuscar)
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonAbuscar}`;
    fetch(url).then((respuesta) => {
        if(respuesta.status != "200") {
            console.log(respuesta);
            document.getElementById("nombrePokemon").value = "Pokémon Not Found."
            definirImagenPokemon('./assets/img/emptyPokeball.png')
        } else {
            return respuesta.json();
        }
    }).then((data) => {
        console.log(data)

        let pokemonImagen = data.sprites.front_default;
        console.log(pokemonImagen)
        definirImagenPokemon(pokemonImagen)

        let pokemonNombre = data.name;

        let pokemonNumero = data.id;
        const numeroYnombre = (pokemonNumero + " - " + primeraMayuscula(pokemonNombre))
        console.log(numeroYnombre)

        definirNombrePokemon(numeroYnombre)



        let tiposPokemon = "";

        console.log("Longitud: " + data.types.length)

        for(i=0; i < data.types.length; i++) {
            if(i == 0) {
                tiposPokemon = tiposPokemon + primeraMayuscula(data.types[i].type.name);
                
            } else {
                tiposPokemon = tiposPokemon + ", " + primeraMayuscula(data.types[i].type.name);
            }
            console.log("Tipos pokemon: " + tiposPokemon)
            
        }

        console.log(tiposPokemon);

        definirTipos(tiposPokemon);


        
        let habilidadesPokemon = "";

        console.log("Longitud: " + data.abilities.length)

        for(i=0; i < data.abilities.length; i++) {
            if(i == 0) {
                habilidadesPokemon = habilidadesPokemon + primeraMayuscula(data.abilities[i].ability.name);
                
            } else {
                habilidadesPokemon = habilidadesPokemon + ", " + primeraMayuscula(data.abilities[i].ability.name);
            }
            console.log("Habilidades pokemon: " + habilidadesPokemon)
            
        }

        console.log(habilidadesPokemon);

        definirHabilidades(habilidadesPokemon);



        definirPSPokemon(data.stats[0].base_stat);

        definirATKPokemon(data.stats[1].base_stat);

        definirDEFPokemon(data.stats[2].base_stat);

        definirSPATKPokemon(data.stats[3].base_stat)

        definirSPDEFPokemon(data.stats[4].base_stat)

        definirSpeedPokemon(data.stats[5].base_stat)

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

const definirPSPokemon = (ps) => {
    const pokemonPS = document.getElementById("psPokemon");
    pokemonPS.innerText = ps;
}

const definirATKPokemon = (ps) => {
    const pokemonPS = document.getElementById("atkPokemon");
    pokemonPS.innerText = ps;
}

const definirDEFPokemon = (def) => {
    document.getElementById("defPokemon").innerText = def;
}

const definirSPATKPokemon = (spAtk) => {
    document.getElementById("spAtkPokemon").innerText = spAtk;
}

const definirSPDEFPokemon = (spDef) => {
    document.getElementById("spDEFPokemon").innerText = spDef;
}

const definirSpeedPokemon = (speed) => {
    document.getElementById("speedPokemon").innerText = speed;
}

const definirTipos = (tipos) => {
    const pokemonTipos = document.getElementById("tipoPokemon");
    pokemonTipos.innerHTML = tipos;
}

const definirHabilidades = (habilidades) => {
    const pokemonHabilidades = document.getElementById("habilidadPokemon");
    pokemonHabilidades.innerHTML = habilidades;
}

const definirPeso = (peso) => {
    const pokemonPeso = document.getElementById("pesoPokemon")
    pokemonPeso.innerHTML = peso + " KG";
}

const definirAltura = (altura) => {
    const pokemonAltura = document.getElementById("alturaPokemon")
    pokemonAltura.innerHTML = altura + " M";
}

const primeraMayuscula = (texto) => {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

const cambiarColor = (color) => {

    console.log("El color seleccionado es: " + color)
    if(color == "rojo") {
            document.getElementById("primerModulo").style.backgroundColor="red";
            document.getElementById("pastaModulo").style.backgroundColor = "red";
            document.getElementById("segundoModulo").style.backgroundColor = "red";
    } else if (color == "verde") {
        document.getElementById("primerModulo").style.backgroundColor="green";
        document.getElementById("pastaModulo").style.backgroundColor = "green";
        document.getElementById("segundoModulo").style.backgroundColor = "green";
    } else if (color == "azul") {
        document.getElementById("primerModulo").style.backgroundColor="#16189c";
        document.getElementById("pastaModulo").style.backgroundColor = "#16189c";
        document.getElementById("segundoModulo").style.backgroundColor = "#16189c";
    } else {
        document.getElementById("primerModulo").style.backgroundColor="rgb(51, 150, 153)";
        document.getElementById("pastaModulo").style.backgroundColor = "rgb(51, 150, 153)";
        document.getElementById("segundoModulo").style.backgroundColor = "rgb(51, 150, 153)";
    }
        
}