const roomService = require('./service');
const cinemaService = require('../cinemas').service;

exports.getByCinemaId = async (req, res) => {
    const cinema = await cinemaService.getByid(req.params.cinema_id);
    
    if (!cinema) {
        res.status(400);
    }

    const rooms = await roomService.getByCinemaId(cinema.id);

    res.send(rooms);
};