console.log('javascript no frontend')


const cotacoesform = document.querySelector('form')
const mainMensage = document.querySelector('h3')
const symbol = document.querySelector('#symbol')
const currency = document.querySelector('#currency')
const name = document.querySelector('#name')
const stock_exchange_long = document.querySelector('#stock_exchange_long')

cotacoesform.addEventListener('submit', (event) => {
    mainMensage.innerText = ''
    currency.innerText =  ''
    name.innerText = ''
    stock_exchange_long.innerText = ''

    mainMensage.innerText = 'Buscando ... ' 

    event.preventDefault();
    const ativo = document.querySelector('input').value

    if(!ativo){
        mainMensage.innerText = 'O ativo dever ser informado'
    }

    fetch(`/cotacoes?ativo=${ativo}`).then((response) =>{
    response.json().then((data) => {
        if (data.error) {
            mainMensage.innerText = `Alguma coisa deu de errado`
            symbol.innerText = `${data.error.mensage} | código ${data.error.code}`
        } else {
            mainMensage.innerText = data.symbol
            currency.innerText = `Currency:  ${data.currency}`
            name.innerText = `Name:  ${data.name}` 
            stock_exchange_long.innerText = `Stock_exchange_long:  ${data.stock_exchange_long}`
        }
    })
})


})