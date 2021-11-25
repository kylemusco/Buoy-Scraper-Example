# Buoy Scraper
Scrapes buoy data from https://glbuoys.glos.us/ every 15 minutes and serves it through a Node Express server

## Prerequisites
- Download [NodeJS](https://nodejs.org/en/download/) 


## Installation
- Clone the repository with the following command
    ```
    git clone https://github.com/kylemusco/Buoy-Scraper-Example.git
    ```
- Install the dependencies
    ```
    npm install
    ```
- Run the server with the following command to start the server on port 3000
    ```
    node app.js
    ```


## Usage

Buoy data is accessible from the `/data` endpoint. Making an HTTP request to `http://localhost:3000/data` will return data in the following format:

```
{
  "lastUpdated": "2021-11-25T00:05:00Z",
  "data": [
    {
      "lon": -87.793,
      "recovered": true,
      "lat": 48.061,
      "timeZone": "America/New_York",
      "buoyInfo": "This buoy is owned and maintained by the NOAA National Data Buoy Center.  More information on this station can be found on <a href=\"http://www.ndbc.noaa.gov/station_page.php?station=45001\">its NOAA National Data Buoy Center page</a>",
      "buoyAlert": "",
      "metaGLOS": "",
      "uglosLink": true,
      "contact": [
        "everhamme@limno.com"
      ],
      "id": "45001",
      "lake": "SUP",
      "longName": "Mid Superior",
      "buoyOwners": "NOAA-NDBC",
      "sponsors": [
        "img/NOAA_logo.png"
      ],
      "sponsorsSrc": [
        "http://www.ndbc.noaa.gov/"
      ],
      "webcamSrc": [
        
      ],
      "webcamLink": [
        
      ]
    },
    ...
  ]
}
```
