// Get one card and log the value and suit
axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
.then(response => {
    console.log(
        response.data.cards[0].value + ' of ' +
        response.data.cards[0].suit
    )
})

// Get two cards and log the value and suit of each
let twoCards = []
axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
.then(response => {
    let deck_id = response.data.deck_id
    twoCards.push(response.data.cards[0])
    return axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
}).then(response => {
    twoCards.push(response.data.cards[0])
    console.log(twoCards[0].value + ' of ' + twoCards[0].suit)
    console.log(twoCards[1].value + ' of ' + twoCards[1].suit)
})


$('document').ready(() => {
    axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/')
    .then(response => {
      deck_id = response.data.deck_id
      
        $('#new-card').on('click', () => {
            axios.get('https://deckofcardsapi.com/api/deck/' + deck_id + '/draw/?count=1')
            .then(response => {
                console.log(
                    response.data.cards[0].value + ' of ' +
                    response.data.cards[0].suit
                )
                $('#card').replaceWith(`<img id="card" src="${response.data.cards[0].image}"><div>`)  
            })
        })
    })
})