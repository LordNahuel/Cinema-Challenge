const genreService = require('./service');

exports.getAll = async (req, res) => {
    const genres = await genreService.getAll(); 

    res.send(genres);
};