module.exports = [{
    method: 'get',
    path: '/movies',
    handler: 'getAll'
},
{
    method: 'post',
    path: '/movie',
    handler: 'addMovie'
},
{
    method: 'put',
    path: '/movies/:movie_id', 
    handler: 'updateMovie'
}];