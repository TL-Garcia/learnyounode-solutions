const fs = require('fs')

module.exports = (filePath, fileExtension, callback) => {
    fs.readdir(filePath, (err, data) => {
        if (err) {
            return callback(err)
        }

        const regex = new RegExp(`.${fileExtension}$`)
        const sortedFiles = data.filter(file => regex.test(file))

        callback(null, sortedFiles)
    })
}

