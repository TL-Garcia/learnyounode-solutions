const fs = require('fs')
const src = process.argv[2]

const printFile = (err, data) => {
    if (err) {
        console.error(err)
        return
    }

    const textBlocks = data.split('\n')

    console.log(textBlocks.length - 1)
}

fs.readFile(src, 'utf8', printFile)
