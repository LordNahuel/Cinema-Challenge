module.exports = [{
    method: 'post',
    path: '/cinemas/:cinema_id/functions/:function_id/boughts',
    handler: 'create',
    middlewares: ['auth']
}];