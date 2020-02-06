const http = require('../../constants').http;

module.exports = async (req, res, next) => {
    const user = req.user; 

    if (user.role !== 'Admin') {
        return res.sendStatus(http.status.FORBIDDEN);
    }

    return next();
};