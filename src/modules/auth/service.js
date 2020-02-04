const jsonwebtoken = require('jsonwebtoken');
const config = require('../../config/config');

exports.createToken = async (params) => {
    if (params.password) {
        delete params.password;
    }
    
    const token = await jsonwebtoken.sign({
        data: params,
    }, config.secret, {
        expiresIn: '12h'
    });

    return token;
};