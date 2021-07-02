require('./utils/import_env').import()
const logger = require('./utils/logger')

logger.info('DAQ ENERGY ALARMS ' + (require('../package.json')).version)
logger.info('Starting monitoring...')

function intervalFunc () {
  logger.debug('Cant stop me now!')
}

setInterval(intervalFunc, 3000)
