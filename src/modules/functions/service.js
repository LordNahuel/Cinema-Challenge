const squel = require('squel');
const pool = require('../../common/pool');

exports.getById = async (id) => {
    const query = squel.select()
        .field('id')
        .field('movie_id')
        .field('room_id')
        .field('date')
        .from('function')
        .where('id = ?', id);

    const preparedQuery = query.toParam();
    const [ rows ] = await pool.query(preparedQuery.text, preparedQuery.values);

    if (!rows || !rows.length) {
        return null;
    }

    return rows[0];
};

exports.checkSeats = async (params) => {
    const query = squel.select()
        .field('fs.seat_id')
        .from('bougth_seats', 'fs')     
        .join('bougth', 'b', 'b.id = fs.bougth_id')   
        .where('b.function_id = ?', params.id)
        .where('fs.seat_id IN ?', params.seats);

    const preparedQuery = query.toParam();
    const [ rows ] = await pool.query(preparedQuery.text, preparedQuery.values);

    if (!rows || rows.length < params.seats) {
        return false;
    }

    return true;
};  

exports.getByCinemaId = async (id) => {
    const query = squel.select()
        .field('f.id')
        .field('f.movie_id')
        .field('f.room_id')
        .field('f.date')        
        .field('r.cinema_id')
        .field('r.name', 'room_name')
        .field('c.name', 'cinema_name')
        .field('m.name', 'movie_name')
        .field('m.duration')
        .from('function', 'f')
        .join('room', 'r', 'r.id = f.room_id')
        .join('movie', 'm', 'm.id = f.movie_id')
        .join('cinema', 'c', 'c.id = r.cinema_id')
        .where('c.id = ?', id);

    const preparedQuery = query.toParam();
    const [ rows ] = await pool.query(preparedQuery.text, preparedQuery.values);

    if (!rows || !rows.length) {
        return null;
    }

    return rows;
};