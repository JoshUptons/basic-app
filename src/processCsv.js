const csv = require('csvtojson')
const fs = require('fs')

let CsvFilePath = '/users/joshupton/documents/e1023/Raw Data-Table 1.csv'
csv()
.fromFile(CsvFilePath)
.then((jsonObj) => {
    console.log(jsonObj)
})

let processCsv = async () => {
    let jsonArray = await csv().fromFile(CsvFilePath)
    let jsonFile = './files/parts.json'
    fs.writeFile(jsonFile, JSON.stringify(jsonArray, null, 2), {encoding: 'utf-8'}, (err) => {
        if (err) throw err
        console.log('saved json to file ' + jsonFile)
    })
}

processCsv()