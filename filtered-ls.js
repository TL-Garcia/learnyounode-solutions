const fs = require('fs')
const src = process.argv[2]
const fileExtension = process.argv[3]

const printDir = (err, list) => {
    if (err) {
        console.error(err)
        return
    }

    const filteredList = filterArr(list, fileExtension)
    filteredList.forEach(file => console.log(file))
}

const filterArr = (arr, str) => {
    const regex = new RegExp(`.${str}$`)
    return arr.filter(e => regex.test(e))
}

fs.readdir(src, printDir)
