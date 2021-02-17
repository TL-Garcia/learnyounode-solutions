'use strict'
const http = require('http')
const url = process.argv[2]

const body = []

http.get(url, (response) => {
    response.setEncoding('utf-8')
    response.on('data', (data) => body.push(data))
    response.on('error', console.error)

    response.on('end', () => {
        const output = body.join('')
        console.log(output.length)
        console.log(output)
    })
})
.on('error', console.error)
    
