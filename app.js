const express = require('express')
const app = express()

// Uses port defined by hosting provider or 3000
const port = process.env.PORT || 3000

// Import our scraper class
const scraper = require('./scraper')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (_, res) => {
    res.send({"message": "Buoy server running..."})
})

app.get('/data', (_, res) => {
    res.send({
        lastUpdated: scraper.lastUpdated,
        data: scraper.buoyData
    })
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})