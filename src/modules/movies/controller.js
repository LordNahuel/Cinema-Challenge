const movieService = require('./service');
const genreService = require('../genres').service;
const http = require('../../constants').http;
const logger = require('../../common/logger');

exports.getAll = async (req, res) => {
    try {
        const movies = await movieService.getAll({
            ids: req.params.ids
        }); 
    
        res.send(movies);
    } catch (error) {
        logger.error('Error getting movies', error);
        res.sendStatus(http.status.INTERNAL_SERVER_ERROR);
    }
};

exports.addMovie = async (req, res) => {
    try {
        const genre = await genreService.checkGenreId(req.body.genre_id);

        if (!genre) {
            return res.sendStatus(http.status.BAD_REQUEST);
        }

        const movie_id = await movieService.addMovie({
            genre_id: req.body.genre_id,
            movie_name: req.body.name,
            duration: req.body.duration
        });

        res.send({
            movie_id,
            ...req.body
        });
    } catch (error) {
        logger.error('Error adding movie', error);
        res.sendStatus(http.status.INTERNAL_SERVER_ERROR);
    }
};

exports.updateMovie = async (req, res) => {
    try {
        const movie = await movieService.getById(req.params.movie_id);
   
        await movieService.updateMovie({
            movie_id: movie.id,
            movie_name: req.body.name, 
            movie_duration: req.body.duration, 
            movie_genre: req.body.genre
        });
        
        res.send({
            ...movie,
            ...req.body
        });
    } catch (error) {
        logger.error('Error updating movies', error);
        res.sendStatus(http.status.INTERNAL_SERVER_ERROR);
    } 
};