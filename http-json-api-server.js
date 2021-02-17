'use strict'
const http = require('http')
const url = require('url')
const port = process.argv[2]

const parseTime = (date) => {
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    
    return {
	hour,
	minute,
	second
    }
}

const parseUnixTime = (date) => {
    return {
	unixtime: date.getTime()
    }
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })

    const urlObj = url.parse(req.url, true)
    const route = urlObj.pathname
    const date = new Date(urlObj.query.iso)

    let parsedDate = null

    if (route === '/api/parsetime') {
	parsedDate = parseTime(date)
    } else if (route === '/api/unixtime') {
	parsedDate = parseUnixTime(date)
    }

    res.end(JSON.stringify(parsedDate))
})

server.listen(port)
