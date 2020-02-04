const functionService = require('./service');

exports.getByCinemaId = async (req, res) => {
    const functions = await functionService.getByCinemaId(req.params.cinema_id);

    res.send(functions);
};