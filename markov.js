'use strict'

const util = require('util')
const fs = require('fs')

const markov = require('markov')

const m = markov(1)
const s = fs.createReadStream('test.txt')

m.seed(s, () => {
  const stdin = process.openStdin()
  process.stdout.write('> ')

  stdin.on('data', line => {
    const res = m.respond(line.toString()).join(' ')
    console.log(res)
    process.stdout.write('> ')
  })
})
