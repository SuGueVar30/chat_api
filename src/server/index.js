import express from 'express';
import logger from 'morgan'

const PORT = process.env.PORT || 3000

const app = express()

app.use(logger('dev'))


app.get('/', (req, res) => {
    res.send('<h1> Esto es el Chat. </h1>')
})

app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}/`)
})