'use strict'

require('dotenv').config()

const request = require('request')

module.exports = function login() {
  const jar = request.jar()
  return new Promise((resolve, reject) => {
    request
      .post({
        jar,
        url: 'http://wingsoffire.scholastic.com/plus/sessions',
        form: {
          utf8: '✓',
          username: process.env.WOF_USER,
          password: process.env.WOF_PASS,
          remember_me: 'on'
        }
      })
      .on('response', response => {
        if (
          response.headers['set-cookie'] &&
          response.headers['set-cookie'].some(
            x => x.indexOf('PLUS_SESSION') === 0)
        ) {
          resolve(jar)
        }
      })
  })
}
