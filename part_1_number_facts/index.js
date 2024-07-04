axios.get('http://numbersapi.com/random?json').then(response => {
    console.log(response.data.text)
    $('#trivia').text(response.data.text)
})


axios.get('http://numbersapi.com/1..5?json').then(response => {
    console.log(response.data)
    Object.values(response.data).forEach(value => {
        console.log(value)
        $('#numbers-2').append(`<div>${value}</div>`)
    })
})

for (let i = 0; i < 4; i++) {
    axios.get(`http://numbersapi.com/7?json`).then(response => {
        console.log(response.data.text)
        $('#numbers-3').append(`<div>${response.data.text}</div>`)
    })
}

