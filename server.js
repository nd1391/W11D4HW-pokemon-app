const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const pokemon = require('./models/pokemon')

// Middleware
// const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set("view engine", "jsx")
app.set("views", "./views")


// Index
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    res.render("Index")
})


// Show


// Listen
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})