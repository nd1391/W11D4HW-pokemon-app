const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const pokemon = require('./models/pokemon')

// Index
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    res.send({pokemon})
})


// Show


// Listen
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})