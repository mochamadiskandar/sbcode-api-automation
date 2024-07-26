const fs = require('fs')

const readJsonSchema = (group, schemaName) => {
    const schemaFolder = 'test/schemas/'
    const jsonFile = fs.readFileSync(
        `${schemaFolder}/${group}/${schemaName}`,
        'utf-8',
    )
    const parseSchema = JSON.parse(jsonFile)
    // console.log(parseSchema)
    return parseSchema
}

module.exports = readJsonSchema
