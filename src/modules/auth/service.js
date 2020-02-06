const jsonwebtoken = require('jsonwebtoken');
const logger = require('../../common/logger');
const config = require('../../config/config');

exports.createToken = async (params) => {
    try {
        if (params.password) {
            delete params.password;
        }
        
        const token = await jsonwebtoken.sign({
            data: params,
        }, config.secret, {
            expiresIn: '12h'
        });
    
        return token;
    } catch (error) {
        logger.error('can\'t verify credentials', error);
        throw error; 
    }
};