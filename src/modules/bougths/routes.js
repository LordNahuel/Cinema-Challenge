const http = require('../../constants').http;

module.exports = [{
    method: http.verbs.POST,
    path: '/cinemas/:cinema_id/functions/:function_id/boughts',
    handler: 'create',
    middlewares: ['auth']
}];