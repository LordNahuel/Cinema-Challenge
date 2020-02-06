const roomService = require('./service');
const cinemaService = require('../cinemas').service;
const http = require('../../constants').http;
const logger = require('../../common/logger');

exports.getByCinemaId = async (req, res) => {
    try {
        const cinema = await cinemaService.getByid(req.params.cinema_id);
    
        if (!cinema) {
            res.status(http.status.BAD_REQUEST);
        }

        const rooms = await roomService.getByCinemaId(cinema.id);

        res.send(rooms);
    } catch (error) {
        logger.error('Error getting rooms', error);
        res.sendStatus(http.status.INTERNAL_SERVER_ERROR);
    }
};