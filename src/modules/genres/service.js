const squel = require('squel');
const pool = require('../../common/pool');
const logger = require('../../common/logger');

exports.getAll = async () => {
    try {
        const query = squel.select()
            .field('id')
            .field('name')
            .from('genre');

        const preparedQuery = query.toParam();
        const [ rows ] = await pool.query(preparedQuery.text, preparedQuery.values);

        return rows;
    } catch (error) {
        logger.error('can\'t execute query', error);
        throw error;        
    }
};

exports.checkGenreId = async (id) => {
    try {
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
    } catch (error) {
        logger.error('can\'t execute query', error);
        throw error;        
    }
};