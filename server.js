const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const pokemons = require('./models/pokemon')

// Index
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})



// Show

// Listen
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})