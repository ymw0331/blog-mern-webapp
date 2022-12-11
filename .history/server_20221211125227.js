const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000

// just a test route
app.get('/', (req, res) => res.send('hello world'))

app.post('/', (res, res) =>)

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
