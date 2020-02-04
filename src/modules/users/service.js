const squel = require('squel');
const pool = require('../../common/pool');

exports.checkCredentials = async (params) => {
    const query = squel.select()
        .field('u.id')
        .field('u.email')
        .field('u.name')
        .field('u.username')
        .field('u.password')
        .field('r.name', 'role')
        .from('user', 'u')
        .where('u.email = ?', params.email)
        .left_join('role', 'r', 'u.role_id = r.id');

    const preparedQuery = query.toParam(); 
    const [ rows ] = await pool.query(preparedQuery.text, preparedQuery.values);

    if (!rows || !rows.length) {
        return null;
    }

    return rows[0];
};