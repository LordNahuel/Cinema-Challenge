-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 03-02-2020 a las 22:11:24
-- Versión del servidor: 5.7.28-0ubuntu0.18.04.4
-- Versión de PHP: 7.3.13-1+ubuntu18.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `Cinema_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bougth`
--

CREATE TABLE `bougth` (
  `id` int(11) NOT NULL,
  `price` float NOT NULL,
  `function_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `bougth`
--

INSERT INTO `bougth` (`id`, `price`, `function_id`, `user_id`) VALUES
(1, 400, 4, 7),
(2, 400, 4, 7),
(3, 400, 4, 7),
(4, 400, 4, 7),
(5, 400, 4, 7),
(6, 400, 4, 8),
(7, 400, 4, 8),
(8, 400, 4, 8),
(9, 400, 4, 8),
(10, 400, 4, 8),
(11, 400, 4, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bougth_seats`
--

CREATE TABLE `bougth_seats` (
  `id` int(11) NOT NULL,
  `seat_id` int(11) NOT NULL,
  `bougth_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `bougth_seats`
--

INSERT INTO `bougth_seats` (`id`, `seat_id`, `bougth_id`) VALUES
(1, 1, 5),
(2, 2, 5),
(3, 1, 6),
(4, 2, 6),
(5, 1, 7),
(6, 2, 7),
(7, 1, 8),
(8, 2, 8),
(9, 1, 9),
(10, 2, 9),
(11, 1, 10),
(12, 2, 10),
(13, 1, 11),
(14, 2, 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cinema`
--

CREATE TABLE `cinema` (
  `id` int(11) NOT NULL,
  `name` varchar(80) COLLATE utf8_spanish_ci NOT NULL,
  `base_price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `cinema`
--

INSERT INTO `cinema` (`id`, `name`, `base_price`) VALUES
(1, 'Aldrey', 200),
(2, 'Los Gallegos', 150),
(3, 'Cines del Paseo', 150),
(4, 'Ambassador', 100);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `function`
--

CREATE TABLE `function` (
  `id` int(11) NOT NULL,
  `movie_id` int(11) NOT NULL,
  `room_id` int(11) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `function`
--

INSERT INTO `function` (`id`, `movie_id`, `room_id`, `date`) VALUES
(1, 5, 1, '2020-01-02 00:00:00'),
(2, 6, 2, '2020-01-16 00:00:00'),
(3, 7, 4, '2020-01-14 00:00:00'),
(4, 6, 3, '2020-01-31 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genre`
--

CREATE TABLE `genre` (
  `id` int(11) NOT NULL,
  `name` varchar(80) COLLATE utf8_spanish_ci NOT NULL,
  `description` varchar(80) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `genre`
--

INSERT INTO `genre` (`id`, `name`, `description`) VALUES
(1, 'Comedia', 'This is a comedia movie'),
(2, 'Accion', 'Acción movie'),
(3, 'Ciencia Ficción ', 'Ciencia Ficción'),
(4, 'Terror', 'Terror');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movie`
--

CREATE TABLE `movie` (
  `id` int(11) NOT NULL,
  `genre_id` int(11) NOT NULL,
  `name` varchar(80) COLLATE utf8_spanish_ci NOT NULL,
  `duration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `movie`
--

INSERT INTO `movie` (`id`, `genre_id`, `name`, `duration`) VALUES
(5, 3, 'dragon ball Xenoverse', 60),
(6, 2, 'Rápido y Furioso', 90),
(7, 3, 'Star Wars', 120),
(8, 4, 'El Exorcista', 150),
(9, 1, 'Dragon Ball Super', 60),
(10, 3, 'La batalla de los dioses', 60),
(15, 3, 'La batalla de los dioses', 60);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(80) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'Admin'),
(2, 'User');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `room`
--

CREATE TABLE `room` (
  `id` int(11) NOT NULL,
  `cinema_id` int(11) NOT NULL,
  `name` varchar(80) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `room`
--

INSERT INTO `room` (`id`, `cinema_id`, `name`) VALUES
(1, 1, 'room'),
(2, 1, 'room'),
(3, 1, 'room'),
(4, 2, 'room'),
(5, 2, 'room'),
(6, 2, 'room'),
(7, 3, 'room'),
(8, 3, 'room'),
(9, 3, 'room'),
(10, 4, 'room'),
(11, 4, 'room'),
(12, 4, 'room'),
(13, 3, 'room'),
(14, 4, 'room');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seat`
--

CREATE TABLE `seat` (
  `id` int(11) NOT NULL,
  `position` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `room_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `seat`
--

INSERT INTO `seat` (`id`, `position`, `room_id`) VALUES
(1, 'a12', 1),
(2, 'a13', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(80) COLLATE utf8_spanish_ci NOT NULL,
  `username` varchar(80) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(80) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(80) COLLATE utf8_spanish_ci NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `name`, `username`, `email`, `password`, `role_id`) VALUES
(6, 'Naruto', 'Naruto', 'rasengan@gmail.com', 'rasengan123', 2),
(7, 'Monkey D Luffy', 'Luffy', 'reydelospiratas@hotmail.com', 'nakama123', 2),
(8, 'Roronoa Zoro', 'Zoro', 'roronoa@outlook.com', 'zoro123', 1),
(9, 'Kenshin Himura', 'Batusai el destajador', 'kenshin', 'kenshin123', 2),
(10, 'Vegeta', '¿Que miras insecto?', 'principe@vegeta.com', 'password123', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bougth`
--
ALTER TABLE `bougth`
  ADD PRIMARY KEY (`id`),
  ADD KEY `function_id` (`function_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `bougth_seats`
--
ALTER TABLE `bougth_seats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `seat_id` (`seat_id`),
  ADD KEY `bought_id` (`bougth_id`);

--
-- Indices de la tabla `cinema`
--
ALTER TABLE `cinema`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `function`
--
ALTER TABLE `function`
  ADD PRIMARY KEY (`id`),
  ADD KEY `room_id` (`room_id`),
  ADD KEY `function_ibfk_1` (`movie_id`);

--
-- Indices de la tabla `genre`
--
ALTER TABLE `genre`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`id`),
  ADD KEY `genre_id` (`genre_id`);

--
-- Indices de la tabla `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cinema_id` (`cinema_id`);

--
-- Indices de la tabla `seat`
--
ALTER TABLE `seat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `room_id` (`room_id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bougth`
--
ALTER TABLE `bougth`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT de la tabla `bougth_seats`
--
ALTER TABLE `bougth_seats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT de la tabla `cinema`
--
ALTER TABLE `cinema`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `function`
--
ALTER TABLE `function`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `genre`
--
ALTER TABLE `genre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `movie`
--
ALTER TABLE `movie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT de la tabla `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `room`
--
ALTER TABLE `room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT de la tabla `seat`
--
ALTER TABLE `seat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `bougth`
--
ALTER TABLE `bougth`
  ADD CONSTRAINT `bougth_ibfk_1` FOREIGN KEY (`function_id`) REFERENCES `function` (`id`),
  ADD CONSTRAINT `bougth_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Filtros para la tabla `bougth_seats`
--
ALTER TABLE `bougth_seats`
  ADD CONSTRAINT `bougth_seats_ibfk_1` FOREIGN KEY (`seat_id`) REFERENCES `seat` (`id`),
  ADD CONSTRAINT `bougth_seats_ibfk_2` FOREIGN KEY (`bougth_id`) REFERENCES `bougth` (`id`);

--
-- Filtros para la tabla `function`
--
ALTER TABLE `function`
  ADD CONSTRAINT `function_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`),
  ADD CONSTRAINT `function_ibfk_2` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`);

--
-- Filtros para la tabla `movie`
--
ALTER TABLE `movie`
  ADD CONSTRAINT `movie_ibfk_1` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`id`);

--
-- Filtros para la tabla `room`
--
ALTER TABLE `room`
  ADD CONSTRAINT `room_ibfk_1` FOREIGN KEY (`cinema_id`) REFERENCES `cinema` (`id`);

--
-- Filtros para la tabla `seat`
--
ALTER TABLE `seat`
  ADD CONSTRAINT `seat_ibfk_1` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`);

--
-- Filtros para la tabla `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
