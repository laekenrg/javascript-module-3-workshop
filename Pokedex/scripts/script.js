const root = document.getElementById("root");

const divLogo = document.createElement("div");
divLogo.classList = "container mx-auto mt-2";
root.appendChild(divLogo)


const pokeLogo = document.createElement("img")
pokeLogo.src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/62902855-31e8-48de-986e-5080e8ef5f15/d5uxsvu-cbf56dfe-0c82-40f9-928b-1e756acf0236.png/v1/fill/w_312,h_112,strp/pokedex_vector_logo_by_macoscrazy_d5uxsvu-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTEyIiwicGF0aCI6IlwvZlwvNjI5MDI4NTUtMzFlOC00OGRlLTk4NmUtNTA4MGU4ZWY1ZjE1XC9kNXV4c3Z1LWNiZjU2ZGZlLTBjODItNDBmOS05MjhiLTFlNzU2YWNmMDIzNi5wbmciLCJ3aWR0aCI6Ijw9MzEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.W5OaCwDASPcITC1_1B8Rr-lqsOWzYddfZH3HwnCkR4o"
divLogo.appendChild(pokeLogo)

const divHijoRoot = document.createElement("div");
divHijoRoot.classList = "container row mx-auto mt-5";
root.appendChild(divHijoRoot)

const divBuscarPokemon = document.createElement("div")
divBuscarPokemon.classList ="col-9" 
divHijoRoot.appendChild(divBuscarPokemon)

const buscarText = document.createElement("input");
buscarText.classList = "form-control";
buscarText.type = "text"
buscarText.placeholder ="Encuentra tu Pokémon"
divBuscarPokemon.appendChild(buscarText);

const containerBtn = document.createElement("div")
containerBtn.classList ="col-3"
divHijoRoot.appendChild(containerBtn)

const btnBuscador = document.createElement("button")
btnBuscador.classList ="btn btn-danger"
btnBuscador.type ="button"
btnBuscador.innerText ="Buscar"
containerBtn.appendChild(btnBuscador)

const cardContainer = document.createElement("div");
cardContainer.classList = "card-container";

root.appendChild(cardContainer)

const formatearId = (id)=>{
    id = id.toString()
    if (id.length == 1) {
        return `#00${id}`
    }
    if (id.length == 2) {
        return `#0${id}`   
    }
    else{
        return `#${id}`
    }
}

const printMiniCards = parsedResp => {
    const cardBoots =`<div class="card ${parsedResp.types[0].type.name} container row mx-auto mt-5 " style="width: 18rem;"> <p class="idPoke"></p> <img src="..." class="card-img-top" alt="..."><div class="card-body ${parsedResp.types[0].type.name}  text-capitalize"><p class="card-text"></p></div></div>`
cardContainer.innerHTML = cardBoots;
document.querySelector(".idPoke").innerHTML = formatearId(parsedResp.id)
document.querySelector(".card-text").innerHTML = parsedResp.name
document.querySelector(".card-img-top").src = parsedResp.sprites.other["official-artwork"].front_default;

}

const obtenerPokemon = async (buscar) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${buscar}`;
    const response = await fetch(url);
    const parsedResp = await response.json();
    console.log(parsedResp);
    console.log(url);
    printMiniCards(parsedResp)
  } catch (error) {
    console.log(error);
  }
};

window.onload = () => {
  btnBuscador.addEventListener("click", () => {
    const buscarValor = buscarText.value;
    const valorMinuscula = buscarValor.toLowerCase(0);
    obtenerPokemon(valorMinuscula);
  });
};
