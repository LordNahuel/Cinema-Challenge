const genreService = require('./service');
const logger = require('../../common/logger');
const http = require('../../constants').http;

exports.getAll = async (req, res) => { 
    try {
        const genres = await genreService.getAll();

        res.send(genres);    
    } catch (error) {
        logger.error('Error getting genres', error);
        res.sendStatus(http.status.INTERNAL_SERVER_ERROR); 
    }
};