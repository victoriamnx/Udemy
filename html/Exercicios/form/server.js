const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000


app.use(bodyParser.urlencoded({ extend: true }))

app.post('/html/index.html', (req, resp) => {
    console.log(req.body)
    console.log(req.query)
    resp.send('<h1>Parabéns.  Usuario Incluido</h1>')
})  

app.post('/html/index.html/:id', (req, resp) => {
    console.log(req.body)
    console.log(req.params)
    resp.send('<h1>Parabéns.  Usuario Incluido</h1>')
})  

app.get('/', (req, resp) => {
    resp.send('<h1>Server started</h1>')
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})