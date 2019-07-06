'use strict'

let Core = require('../../__cores/Core')
const routes = require('./routes')
const controllers = {
    'OfficeMalangsoftware': require('../../modules/controllers/OfficeMalangsoftware'),
    'Documentations': require('../../modules/controllers/Documentations')
}
const middlewares = {
    'AuthSession': require('../../middlewares/Layer1AuthSession.middleware'),
    'AuthToken': require('../../middlewares/Layer1AuthToken.middleware'),
    'InputValidation': require('../../middlewares/ValidateInput.middleware')
}

module.exports = {
    start: function () {
        console.log('staring ...')
        new Core({routes, middlewares, controllers})
            .startServer(4003)
    }
}