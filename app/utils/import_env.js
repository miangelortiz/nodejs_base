/**
 * This module imports and checks the enviorment variables, if something is bad it will halt the program.
 * @author Miguel Angel Ortiz
 * @version 0.1
 */

exports.import = function () {
  require('dotenv').config()
  checkVars()
}

function checkVars () {
  checkENV()
  checkConnector()
  checkDBHost()
  checkDBUser()
  checkDBPass()
}

// #region functions checking every .env var

const checkENV = () => {
  if (process.env.ENV.toLowerCase() !== '') {
    return
  }

  throw Error('Env ENV not valid')
}

const checkConnector = () => {
  if (process.env.DB_CONNECTOR.toLowerCase() === 'mariadb') {
    return
  }
  if (process.env.DB_CONNECTOR.toLowerCase() === 'none') {
    return
  }

  throw Error('Env DB_CONNECTOR not valid')
}

const checkDBHost = () => {
  // checks if it is a valid ip
  if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(process.env.DB_HOST)) {
    return
  }
  if (process.env.DB_HOST !== '') {
    return
  }

  throw Error('Env DB_HOST not valid')
}

const checkDBUser = () => {
  if (process.env.DB_USER !== '') {
    return
  }

  throw Error('Env DB_USER not valid')
}

const checkDBPass = () => {
  if ((process.env.DB_PASS !== null) && (process.env.DB_PASS !== undefined)) {
    return
  }

  throw Error('Env DB_PASS not valid')
}
