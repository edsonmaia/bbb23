console.log('Cards')

let sectionCards = document.querySelector('.cards')

// ler o arquivo json
fetch('participantes-bbb23.json')
.then( response => response.json() )
.then( data => {
    // console.log(data)
    data.map( participante => {
        // console.log(participante)
        // criar um card para cada participante
        let card = document.createElement('div')
        card.classList.add('card', participante.grupo.toLowerCase())
        // console.log(card)
        card.innerHTML = `
            <img src="./images/300x300/${participante.imagem}.png" alt="" />
            <span class="fundo${participante.grupo}">${participante.nome}</span>
        `
        sectionCards.appendChild(card)
    })
})
