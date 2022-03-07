const express = require('express')
const bodyparser = require('body-parser')
const port = 3000
const app = express()


app.set('view engine', 'hbs')
app.use(bodyparser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'Node js',
        pageBody: 'hello node'
    })
})

app.post('/', (req,res) => {
    let body = req.body

    let res_body = {
        first_name: body.first_name,
        last_name: body.last_name
    }
    console.log(res_body)

    res.render('welcome', res_body)
})

app.listen(port)