const dayjs = require('dayjs')

const dateTime = dayjs().format('YYYYMMDD_HHmmss')
module.exports = {
    reporter: 'node_modules/mochawesome',
    'reporter-option': [
        'reportDir=report',
        `reportFilename=[status]_[${dateTime}]-[name]-report`,
        'html=true',
        'json=true',
        'overwrite=false',
        'timestamp=longDate',
    ],
}
