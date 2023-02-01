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

        let icone1 = participante.situacao[0]
        let icone2 = participante.situacao[1] || "participando"

        card.innerHTML = `
            <div class="situacao">
                <img class="icone" src="./images/icones/${icone2}.svg" />
                <img class="icone" src="./images/icones/${icone1}.svg" />
            </div>
            <img class="foto" src="./images/300x300/${participante.imagem}.png" alt="" />
            <span class="fundo${participante.grupo}">${participante.nome}</span>
        `
        sectionCards.appendChild(card)

        // verificar se foi eliminado
        if(participante.situacao[0] == 'eliminado') {
            card.classList.add('eliminado')
        }

    })
})
