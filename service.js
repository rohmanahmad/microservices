'use strict'

require('./filemapper')
const minimist = use('minimist')

let args = minimist(process.argv.slice(2), {
    alias: {
        h: 'help',
        v: 'version'
    }
})
const serviceName = args._
const Service = use(serviceName)

delete args._

new Service().handle(args)