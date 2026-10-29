const cardsContainer = document.querySelector("#cards-container")
const url = "https://rickandmortyapi.com/api/character/";

async function getAllCharacters() {
    try {
        const resposta = await fetch(url)

        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`)
        }
        const data = await resposta.json();

        data.results.forEach(character => {
            showCards(character)
        })
    } catch (erro) {
        console.error("Erro ao buscar personagens:", erro);
    }
}

getAllCharacters();


function showCards(data) {

    const article = document.createElement("article")
    article.classList.add("card")

    article.innerHTML = `
            <figure>
                <img src="${data.image}" alt="">
            </figure>
            <p class="card-name">${data.name}</p>
            <div class="card-bot">
            <p class="card-species">${data.species}</p>
            <p class="card-species">${data.status}</p>
            </div>
 `; cardsContainer.append(article)

}