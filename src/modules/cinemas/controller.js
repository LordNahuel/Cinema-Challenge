const cinemaService = require('./service');
const logger = require('../../common/logger');
const http = require('../../constants').http;

exports.getAll = async (req, res) => {
    try {
        const cinemas = await cinemaService.getAll();

        res.send(cinemas);
    } catch (error) {
        logger.error('Error getting cinemas', error);
        res.sendStatus(http.status.INTERNAL_SERVER_ERROR);
    }
};