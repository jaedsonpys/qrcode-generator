const express = require('express')
const bp = require('body-parser')
const qr = require('qrcode')

const app = express()

app.set('view engine', 'ejs') // view engine
app.use(bp.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/make', (req, res) => {
    const content = req.query.content

    if(!content || content.length == 0) {
        console.log('Empty content')
        res.send('Empty content')
    }

    qr.toDataURL(content, (err, src) => {
        if(err) res.send('A error ocurred')
        res.render('qrcode', {src})
    })
})

app.listen(5500, 'localhost', () => {
    console.log('Running server in http://localhost:5500')
})