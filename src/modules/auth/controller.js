const authService = require('./service');
const userService = require('../users').service;
const logger = require('../../common/logger');
const http = require('../../constants').http;

exports.login = async (req, res) => {
    try {
        const user = await userService.checkCredentials({
            email: req.body.email,
            password: req.body.password
        });
    
        if (!user || user.password != req.body.password) {
            return res.sendStatus(http.status.BAD_REQUEST);
        }
    
        const token = await authService.createToken(user);
    
        res.send(token);
    } catch (error) {
        logger.error('Error creating token', error);
        res.sendStatus(http.status.INTERNAL_SERVER_ERROR);
    }
};