const functionService = require('./service');
const http = require('../../constants').http;
const logger = require('../../common/logger');

exports.getByCinemaId = async (req, res) => {
    try {
        const functions = await functionService.getByCinemaId(req.params.cinema_id);

        res.send(functions);
    } catch (error) {
        logger.error('Error getting functions by the cinema given', error);
        res.sendStatus(http.status.INTERNAL_SERVER_ERROR);
    }
};