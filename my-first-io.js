'use strict'

const fs = require('fs')
const src = process.argv[2]

const file = fs.readFileSync(src).toString()

const textBlocks = file.split('\n')

console.log(textBlocks.length - 1)
