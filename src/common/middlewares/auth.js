const jsonwebtoken = require('jsonwebtoken');
const config = require('../../config/config');

module.exports = async (req, res, next) => {
    const auth = req.get('Authorization');
    
    if (!auth || !auth.length) {
        return res.sendStatus(401);
    }

    const user = jsonwebtoken.verify(auth, config.secret);

    if (!user) {
        return res.sendStatus(401);
    }

    req.user = user.data;

    return next();
};