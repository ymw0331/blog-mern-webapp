const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

// just a test route
app.get('/', (req, res) => res.send('hello world'))

app.listen(8000, () => console.log('Server started at port 8080

'))
