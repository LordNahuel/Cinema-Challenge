# Avalith challenge NODEJS
## Sistema de reserva de entradas para funciones de cines
Esta API permite la compra de entradas para películas. La misma permitirá consultar los distintos cines disponibles, las funciones programadas para cada uno de ellos y seleccionar las sala y butacas deseadas.
Los usuarios que no son administradores podrán seleccionar las butacas en caso de que la función y sala seleccionada cuente con las disponibilidad necesaria. Los usuarios administradores pueden dar de alta nuevas películas y editarlas.
## Tecnologías usadas
- MySql para la persistencia de datos.
- Express framework para la API
- Nodemailer para el envío de emails, usando el servicio SMTP mailtrap
- Async/await para el manejo de funciones asíncronas
- Winston para el sistema de log
- Jsonwebtoken para el sistema de autenticación
- Squel query builder para el armado dinámico de consultas SQL
## Modelo de base de datos
![imagen modelo de datos](https://i.imgur.com/Nkt2tX3.png)
El modelo de datos propuesto, contempla la posibilidad de que un cine tenga más de una sala.
Las salas, pueden tener varias funciones en distintos horarios para las distintas películas.
Para persistir la compra, se guardan datos básicos de la compra tales como el precio, la función y el usuario. Asi como tambien todas las butacas que contiene.
Debido a que esto es un challenge, las contraseñas no se guardan de forma cifrada, aunque en un caso real sería una buena práctica hacerlo.
En el repositorio se adjunta un dump de la base de datos a fin de tener registros ya insertados a modo de prueba.
## Llamadas API disponibles
En el repositorio se adjunta la configuración de Postman que se podrá importar para poder consumir todos los endpoints disponibles a fin de testearlos.
### Get all genres
`/genres`
Esta llamada API permite conocer todos los géneros disponibles
### Get all movies
`/movies`
Esta llamada API permite obtener el listado de todas las películas disponibles (que se podrían llegar a ver en cualquier cine) a su vez permite filtrar por IDs de género.
 
### Add movie
`/movie`
 
Esta llamada API permite crear una nueva película con nombre, genre_id y duración.
 
### Update Movie
 
`/movies/:movie_id`
 
Esta llamada API modifica un registro de una película ya cargada verificando la existencia del ID.
 
### Add Bougths
 
`/cinemas/:cinema_id/functions/:function_id/boughts`
 
Permite registrar la compra de entradas para una pelicula en un cine y función determinados por el usuario. Al finalizar la compra se envía un mail de confirmación al usuario.
 
### Get All cinemas
 
`/cinemas`
 
Devuelve todas las salas de cine disponibles.
 
### Get Rooms
 
`/cinemas/:cinema_id/rooms`
 
Esta llamada API devuelve todas las salas de un cine seleccionado.
 
### Login
 
`/auth/signin`
 
Esta llamada permite genera un token permitiéndole al usuario consumir ciertos endpoints.
 
### Get Functions
 
`/cinemas/:cinema_id/functions`
 
Esta llamada API permite obtener el listado de funciones para un cine en particular.
