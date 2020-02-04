const winston = require('winston');
const config = require('../config/config');

module.exports = winston.createLogger({
    level: config.logLevel,
    transports: [ new winston.transports.Console() ]
});