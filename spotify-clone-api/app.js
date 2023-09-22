const express = require('express')

const songsRoutes = require('./routes/songs')

const cors = require('cors')

const app = express()

app.use(cors())

app.use('/', songsRoutes)


app.listen(3000, () => {
    console.log(`O servidor está rodando.`);
  });