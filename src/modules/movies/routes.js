const http = require('../../constants').http;

module.exports = [{
    method: http.verbs.GET,
    path: '/movies',
    handler: 'getAll'
},
{
    method: http.verbs.POST,
    path: '/movie',
    handler: 'addMovie',
    middlewares: ['auth', 'isAdmin']
},
{
    method: http.verbs.PUT,
    path: '/movies/:movie_id', 
    handler: 'updateMovie',
    middlewares: ['auth', 'isAdmin']
}];