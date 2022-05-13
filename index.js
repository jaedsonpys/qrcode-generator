const express = require('express')
const bp = require('body-parser')

const app = express()

app.set('view engine', 'ejs') // view engine
app.use(bp.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(5500, 'localhost', () => {
    console.log('Running server in http://localhost:5500')
})