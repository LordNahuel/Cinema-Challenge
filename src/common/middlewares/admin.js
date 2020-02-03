module.exports = async (req, res, next) => {
    const user = req.user; 

    if (user.role !== 'Admin') {
        return res.sendStatus(403);
    }

    return next();
};