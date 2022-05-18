var express = require('express')
var app = express()

var logger = require('./logger')

app.use(logger)

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res, next) {
    res.status(200).send("<h1>Home</h1>")
})

app.get('/about/people', function (req, res, next) {
    // res.status(200)
    console.log("== About people page requested")
    res.status(200).send("<h1>About People</h1>")
})

// https://www.merriam-webster.com/dictionary/express
// https://www.merriam-webster.com/dictionary/Internet
// https://www.merriam-webster.com/dictionary/{word}

app.get('/dictionary/:word', function (req, res, next) {
    console.log("== req.params:", req.params)
    var word = req.params.word
    console.log("== word:", word)
    res.status(200).send("<h1>Definition for '" + word + "'</h1>")
})

var availablePeople = [
    'luke',
    'leia',
    'rey',
    'finn',
    'r2d2'
]

app.get('/people/:person', function (req, res, next) {
    var person = req.params.person
    console.log("== person:", person)
    if (availablePeople.indexOf(person) !== -1) {
        res.status(200).sendFile(__dirname + '/public/people/' + person + '.html')
    } else {
        next()
    }
})

// app.post()
// app.delete()
// app.patch()

app.get('*', function (req, res, next) {
    res.status(404).send("<h1>404</h1>")
})

app.listen(8001, function () {
    console.log("== Server is listening on port 8001")
})
