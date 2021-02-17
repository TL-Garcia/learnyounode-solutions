const sortFiles = require('./mymodule.js')
const dirPath = process.argv[2]
const fileExtension = process.argv[3]

const printFiles = (err, files) => {
    if (err) return console.error(err)

    files.forEach(file => console.log(file))
}

sortFiles(dirPath, fileExtension, printFiles)
