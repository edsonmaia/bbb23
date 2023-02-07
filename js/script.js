// console.log('Cards')
let sectionCards = document.querySelector('.cards')
let btnCamarote  = document.querySelector('.btnCamarote')
let btnPipoca    = document.querySelector('.btnPipoca')
let tituloGrande = document.querySelector('.tituloGrande')

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
                <img class="icone ${icone1}" src="./images/icones/${icone1}.svg" />
                <img class="icone ${icone2}" src="./images/icones/${icone2}.svg" />
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

    let cardsCamarote = document.querySelectorAll('.camarote')
    let cardsPipoca   = document.querySelectorAll('.pipoca')
    // console.log(cardsCamarote)
    // console.log(cardsPipoca)

    // escutador de eventos de click nos botões
    btnCamarote.addEventListener('click', () => {
        // console.log('Camarote')
        let dadosFiltrados = data.filter( card => card.grupo == 'Pipoca' )
        // console.log(dadosFiltrados)
        mostrarTodosCards(cardsCamarote, cardsPipoca)
        // filtrar cards do grupo pipoca para ocultar
        dadosFiltrados.forEach( (card, indice) => {
            cardsPipoca[indice].classList.add('ocultar')
        })
    })

    btnPipoca.addEventListener('click', () => {
        // console.log('Pipoca')
        let dadosFiltrados = data.filter( card => card.grupo == 'Camarote' )
        // console.log(dadosFiltrados)
        mostrarTodosCards(cardsCamarote, cardsPipoca)
        // filtrar cards do grupo camarote para ocultar
        dadosFiltrados.forEach( (card, indice) => {
            cardsCamarote[indice].classList.add('ocultar')
        })
    })

    // escutar o click no título da página para mostrar todos os cards
    tituloGrande.addEventListener('click', () => {
        mostrarTodosCards(cardsCamarote, cardsPipoca)
    })

})

function mostrarTodosCards(cardsCamarote, cardsPipoca) {
    cardsCamarote.forEach( (card, indice) => {
        cardsCamarote[indice].classList.remove('ocultar')
    })
    cardsPipoca.forEach( (card, indice) => {
        cardsPipoca[indice].classList.remove('ocultar')
    })
}
