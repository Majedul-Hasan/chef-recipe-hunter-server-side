
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5200
app.use(cors())
const chefsProfile = require('./data/chefsProfile.json')



app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/chefsProfile', (req, res) => {
  res.json(chefsProfile)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})