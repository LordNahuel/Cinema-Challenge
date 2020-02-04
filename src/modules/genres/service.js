const squel = require('squel');
const pool = require('../../common/pool');

exports.getAll = async () => {
    const query = squel.select()
        .field('id')
        .field('name')
        .from('genre');

    const preparedQuery = query.toParam();
    const [ rows ] = await pool.query(preparedQuery.text, preparedQuery.values);

    return rows;
};

exports.checkGenreId = async (id) => {
    const query = squel.select()
        .field('id')
        .from('genre')
        .where('id = ?', id);

    const preparedQuery = query.toParam();
    const [ rows ] = await pool.query(preparedQuery.text, preparedQuery.values);

    if (!rows || !rows.length) {
        return null;
    }

    return rows[0];
};