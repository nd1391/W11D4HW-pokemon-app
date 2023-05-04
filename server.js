require("dotenv").config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const Pokemon = require('./models/pokemon')
const { connect, connection } = require('mongoose')


// Database connection
connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
connection.once('open', () => {
    console.log('connected to mongo')
})

// Middleware
// const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set("view engine", "jsx")
app.set("views", "./views")
app.use(express.urlencoded({ extended: false }));


// Index
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', async (req, res) => {
    console.log('Index Controller Func. Running...')
    try { //big issue right here
        // req.body.name = req.body.name === 'on'
        const foundPokemon = await Pokemon.find({})
        res.status(200).render('Index', {
            pokemon: foundPokemon
        })
    } catch (err) {
        res.status(400).send(err)
    }    
})

app.get('/pokemon/new', (req, res) => {
    res.render('New')
})

// Create
app.post('/pokemon', async (req, res) => {
    try {
        const newPokemon = await Pokemon.create(req.body);
        console.log(req.body)
        res.redirect('/pokemon')
    } catch (err) {
        res.status(400).send(err)
    }
})

// Show
app.get('/pokemon/:id', async (req, res) => {
    try {
        const foundPokemon = await Pokemon.findById(req.params.id)
        res.render('Show', {
            pokemon: foundPokemon,
        })
    } catch (err) {
        res.status(400).send(err)
    }
})


// Listen
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})