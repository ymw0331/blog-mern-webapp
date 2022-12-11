const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000

// Initialize middleware, body parser not needed as it is built in middleware
// function of express, parse icoming JSON payload
app.use(express.json({ extended: false }))

// just a test route
app.get('/', (req, res) => res.send('hello world'))
app.post('/', (req, res) => res.send(`Hello ${req.body.name}, thank you for using postman`))

app.get('/hello/:name', (req, res) => res.send(`Hello ${req.}`))


app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
