const http = require('../../constants').http;

module.exports = [{
    method: http.verbs.GET, 
    path: '/cinemas/:cinema_id/rooms',
    handler: 'getByCinemaId'
}];