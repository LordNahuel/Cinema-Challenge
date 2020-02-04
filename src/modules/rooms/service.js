const squel = require('squel');
const pool = require('../../common/pool');

exports.getByCinemaId = async (id) => {
    const query = squel.select() 
        .field('id')
        .field('cinema_id')
        .field('name')
        .from('room')
        .where('cinema_id = ?', id); 

    const preparedQuery = query.toParam();
    const [ rows ] = await pool.query(preparedQuery.text, preparedQuery.values);

    return rows;
};