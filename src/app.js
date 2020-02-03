const http = require('http');
const app = require('express')(); 
const bodyParser = require('body-parser');
const compression = require('compression');
const winston = require('winston');
const config = require('./config/config');

const logger = winston.createLogger({
    transports: [ new winston.transports.Console() ]
});

app.use(compression()); 
app.use(bodyParser.json({
    limit: '50mb'
}));

app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));

// @todo manejo de errores express
logger.info(`Starting app on port ${config.port}`);
http.createServer(app).listen(config.port);