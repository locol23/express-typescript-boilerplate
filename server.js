const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.listen(3000);
console.log('listening on port 3000');

app.get('/', (req, res) => res.send({ a: 'get' }))
app.get('/set-status-code', (req, res) => res.status(500).send({ a: 'get-500' }))
app.post('/', (req, res) => res.status(400).send({ a: 'post' }))
app.post('/set-status-code', (req, res) => res.status(400).send({ a: 'post-400' }))
