const authService = require('./service');
const userService = require('../users').service;

exports.login = async (req, res) => {
    const user = await userService.checkCredentials({
        email: req.body.email,
        password: req.body.password
    });

    if (!user || user.password != req.body.password) {
        return res.sendStatus(400);
    }

    const token = await authService.createToken(user);

    res.send(token);
};