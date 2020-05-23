const path = require('path')
const express = require('express')
const hbs = require('hbs')
const cotacoes = require('./util/cotacao')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.use(express.static(publicDirectoryPath))
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.get('', (req, res) => {
    res.render('', {
        title: 'Cotação',
        author: 'Lucas Pradella'
    })
})


app.get('/help', (req, res) => {

    res.render('help', {
        title: 'Ajuda'
    })
})


app.get('/about', (req, res) => {

    res.render('abaut', {
        title: 'Sobre'
    })
})


app.get('/cotacoes', (req, res) => {

    if (!req.query.ativo) {
        const error = {
            mensage: 'O Ativo deve ser informado'
        }
        return res.status(err.code).json({
            error: {
                mensage: 'O Ativo deve ser informado',
                code: err.code
            }
        })
    }

    const symbol = req.query.ativo.toUpperCase();

    cotacoes(symbol, (err, body) => {
        if (err) {
            const { mensage } = err
            return res.status(err.code).json({
                error: err
            })
        }

        return res.status(200).json(body)
    })

})


app.get('*', (req, res) => {
    res.render('404', {
        title: '404 ',
        errormensage: 'Errouuuu !!!!'
    })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Subiu o server na porta ${port}`)
})