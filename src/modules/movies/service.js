const squel = require('squel');
const pool = require('../../common/pool'); 

exports.getAll = async (params) => {
    const query = squel.select()
        .field('id')
        .field('name')
        .field('genre_id')
        .field('duration')
        .from('movie');

    if (params.ids && params.ids.length) {
        query.where('genre_id IN ?', params.ids);
    }
    
    const prepareQuery = query.toParam();
    const [ rows ] = await pool.query(prepareQuery.text, prepareQuery.values);

    return rows;
};

exports.addMovie = async (params) => {
    const query = squel.insert()
        .into('movie')
        .set('name', params.movie_name)
        .set('genre_id', params.genre_id)
        .set('duration', params.duration);

    const prepareQuery = query.toParam();
    const [ row ] = await pool.query(prepareQuery.text, prepareQuery.values);

    return row.insertId;
};

exports.getById = async (id) => {
    const query = squel.select()
        .field('id')
        .field('name')
        .field('duration')
        .field('genre_id')
        .from('movie')
        .where('id = ?', id);

    const prepareQuery = query.toParam();
    const [ rows ] = await pool.query(prepareQuery.text, prepareQuery.values);
    
    if (!rows || !rows.length) {
        return null;
    }

    return rows[0];
};

exports.updateMovie = async (params) => {
    const query = squel.update()
        .table('movie')
        .set('name', params.movie_name)
        .set('duration', params.movie_duration)
        .set('genre_id', params.movie_genre)
        .where('id = ?', params.movie_id);

    console.log(query.toString());
    const prepareQuery = query.toParam();
    const [ row ] = await pool.query(prepareQuery.text, prepareQuery.values);

    return row;
};