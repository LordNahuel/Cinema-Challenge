const movieService = require('./service');
const genreService = require('../genres').service;

exports.getAll = async (req, res) => {
    const movies = await movieService.getAll({
        ids: req.params.ids
    }); 

    res.send(movies);
};

exports.addMovie = async (req, res) => {
    const genre = await genreService.checkGenreId(req.body.genre_id);

    if (!genre) {
        return res.sendStatus(400);
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
};

exports.updateMovie = async (req, res) => {
    const movie = await movieService.getById(req.params.movie_id);
    console.log('id', movie);
    const updated = await movieService.updateMovie({
        movie_id: movie.id,
        movie_name: req.body.name, 
        movie_duration: req.body.duration, 
        movie_genre: req.body.genre
    });
    res.send({
        ...movie,
        ...req.body
    }); 
};