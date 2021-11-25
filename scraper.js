// Scrapes glbuoys.glos.us for buoy data on start up and again every 15 minutes
const axios = require('axios')
const jsonValidator = require('./jsonValidator')
const moment = require('moment');

const URL = 'https://glbuoys.glos.us/static/Buoy_tool/data/meta_english.json';

class Scraper {
    constructor() {
        this.buoyData = [];
        this.lastUpdated = this.getCurrentTime()

        // Scrape URL on start up
        this.scrape()

        // Initialize interval
        this.updateData()
    }

    // Updates buoy data every 15 minutes
    updateData() {
        setInterval(this.scrape, 15 * 60 * 1000)
    }

    // Utility for getting current time in UTC
    getCurrentTime() {
        return moment.utc().format();
    }

    async scrape() {
        try {
            const response = await axios.get(URL)
            const data = response.data

            // Validate data returned from URL
            if (jsonValidator.validate(data).valid) {
                this.buoyData = data

                console.log(`[${this.getCurrentTime()}] Updated buoy data`)
            } else {
                console.log(`[${this.getCurrentTime()}] Invalid data returned:`)
                console.log(JSON.stringify(data,null,3))
            }
    
        } catch(err) {
            console.log(err)
        }
    }
}

module.exports = new Scraper()