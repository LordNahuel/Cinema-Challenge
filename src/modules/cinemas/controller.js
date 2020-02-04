const cinemaService = require('./service');

exports.getAll = async (req, res) => {
    const cinemas = await cinemaService.getAll();

    res.send(cinemas);
};