const express = require('express')
const drinks = require('./models/drinks')

const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!')
})

app.get('/drinks', (req, res) => {
    res.render(`drinks_index.ejs`, {
        allDrinks: drinks
    })
})

app.get('/drinks/:id', (req, res) => {
    res.send(req.params.id)
})

app.listen(3000, () => {
    console.log('listening')
})