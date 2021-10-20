require('./utils/import_env').import()
const logger = require('./utils/logger')

logger.info('NODEJS BASE ' + (require('../package.json')).version)
logger.info('Starting watching...')

function intervalFunc () {
  logger.debug('Cant stop me now!')
}

setInterval(intervalFunc, 3000)
