const squel = require('squel');
const pool = require('../../common/pool');

exports.getByid = async (id) => {
    const query = squel.select()
        .field('id')
        .field('base_price')
        .field('name')
        .from('cinema')
        .where('id = ?', id); 

    const preparedQuery = query.toParam();
    const [ rows ] = await pool.query(preparedQuery.text, preparedQuery.values);

    if (!rows || !rows.length) {
        return null;
    }

    return rows[0];
};

exports.getAll = async () => {
    const query = squel.select()
        .field('id')
        .field('base_price')
        .field('name')
        .from('cinema'); 

    const preparedQuery = query.toParam();
    const [ rows ] = await pool.query(preparedQuery.text, preparedQuery.values);

    return rows;
};  