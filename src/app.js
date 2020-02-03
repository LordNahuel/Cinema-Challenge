const http = require('http');
const app = require('express')(); 
const bodyParser = require('body-parser');
const compression = require('compression');
const logger = require('./common/logger');
const router = require('./router');
const config = require('./config/config');

app.use(compression()); 
app.use(bodyParser.json({
    limit: '50mb'
}));

app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));

app.use(router);

// @todo manejo de errores express
logger.info(`Starting app on port ${config.port}`);
http.createServer(app).listen(config.port);