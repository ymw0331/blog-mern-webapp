const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000

// initialize middleware
app.use(express.jsonx({ extended: false }))

// just a test route
app.get('/', (req, res) => res.send('hello world'))

app.post('/', (req, res) => res.send('Hello postman'))

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
