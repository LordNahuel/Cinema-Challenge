const squel = require('squel');
const pool = require('../../common/pool');
const logger = require('../../common/logger');

exports.getByid = async (id) => {
    try {
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
    } catch (error) {
        logger.error('can\'t execute query', error);
        throw error;  
    }
};

exports.getAll = async () => {
    try {
        const query = squel.select()
            .field('id')
            .field('base_price')
            .field('name')
            .from('cinema'); 

        const preparedQuery = query.toParam();
        const [ rows ] = await pool.query(preparedQuery.text, preparedQuery.values);

        return rows;
    } catch (error) {
        logger.error('can\'t execute query', error);
        throw error; 
    }
};  