const http = require('../../constants').http;

module.exports = [{
    method: http.verbs.GET,
    path: '/cinemas',
    handler: 'getAll'
}];