//setup express js webserver with ratelimiting

const {rateLimit, MemoryStore} = require('express-rate-limit')
const express = require('express')
const app = express()
const port = 3045
const puppeteerModule = require('./puppeteer')

const apiLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 25, // 25 requests per 15 minutes
	standardHeaders: true,
	store: new MemoryStore(),
})

// Apply the rate limiting middleware to API calls only
app.use('/api', apiLimiter)

app.get('/api/ping', (req, res) => {
    res.status(200).json({
        status: "OK"
    })
})

app.get('/api/artist/:uuid/monthly_listeners', async (req, res) => {
    try {
        if (!req.params.uuid) return res.status(400).json({
            error: "Missing or invalid UUID"
        })

        const monthly_listeners = await puppeteerModule.getMonthlyListeners(req.params.uuid)
        
        return res.status(200).json({
            monthly_listeners: monthly_listeners
        })

    } catch (err) {
        return res.status(500).json({
            error: err
        })
    }
})
  
app.listen(port, () => {
    console.log(`Spotify API listening on port ${port}`)
})