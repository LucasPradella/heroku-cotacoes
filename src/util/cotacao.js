const request = require('request')

const cotacao = (symbol, callback) =>{
    const url =`https://api.worldtradingdata.com/api/v1/stock?symbol=${symbol}&api_token=XZM6Zep8JlwleLEF5KngzkkP0dIRap3rkiRFZjQo8RosU2UhwsYIdio0hjbz`;

    request({url: url, json: true}, (err, response) => {
        if (err) {
            callback({
                mensage: `Nao foi ein ${err}`, 
                code: 500
            }, undefined)
        }

        if (response.body === undefined || response.body.data  === undefined ) {
            callback({
                mensage: `Nao encontramos nada ${err}`, 
                code: 400
            }, undefined)
        }

        const parsedJson = response.body.data[0];
        const {symbol, price_open, price, day_high, day_low, currency, name, stock_exchange_long} = parsedJson;
        callback(undefined, {symbol, price_open, price, day_high, day_low, currency, name, stock_exchange_long} )
    })
}


module.exports = cotacao
