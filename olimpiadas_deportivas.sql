-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-11-2024 a las 19:54:05
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `olimpiadas_deportivas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro`
--

CREATE TABLE `registro` (
  `usuario` varchar(100) NOT NULL,
  `rol_institucion` varchar(100) NOT NULL,
  `contrasena` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `registro`
--

INSERT INTO `registro` (`usuario`, `rol_institucion`, `contrasena`) VALUES
('a', 'a', '$2y$10$2k6Da5Q5FVYY.BkUE1j0POB7ayShIYjNvqX7OSgizpH8qnD/834Ca'),
('b', 'b', '$2y$10$m4/b4MrkTEKGdXH0Ib1cZOQwQvodWrpEl4UOTISbrLUsi2gRelGm.'),
('ccgh', 'estudiante', '$2y$10$N1y2lccFeWPGnl4UXIyBJeBhu7myUD2r2CxY2mYPZSMGYNWSFbnTu'),
('celular', 'estudiante', '$2y$10$HgiM/2/Ka6aLbKysQhTEDOGd5.5cBKWxZOTxKmtWh9nhgYxeX8zJ6'),
('cindy', 'estudiante', '$2y$10$ddUQuP8woT98pOChi00gGu5aF2rszEFBewckI6aWXhvCZT6zZUvya'),
('doritos', 'estudiante', '$2y$10$HfD/w4uDqu63asZhFbaE4eYGuUxAFZX7UclzRPs9tEWzDrq.0D5IS'),
('h', 'jhj', '$2y$10$LTdSalyHrQ.LUl/5y4knG.DC3QbxbghzMpFSZ0FO82eLDYT0xNzee'),
('loquito', 'estudiante', '$2y$10$Jj2yClxmjjp8ZWEXDvtlQe1Tdicp4yv8Wwzg05Li3GloXLDvYcFCO'),
('marta', 'estudiante', '$2y$10$Y/8BIEEc7b3RP2kYsDxpvOgotMNkZ5EmZRMajlZwuL70ZLVnxDFpS'),
('nicolino', 'estudiante', '$2y$10$M0DaYT.uWhMcjLdAi0UaSeeBTYTmjKrTU7SuhFCi8Oh.oUf7TPZSS'),
('sdfgh', 'estudiante', '$2y$10$0Q8D1p.5VjMT7bomNqrE1eE/m5SmV2BL7fx4UOrneQxEmytkWSYh2'),
('sds', 'estudiante', '$2y$10$h/v92sEOjksQQ0bVMy1ue.4JgJ0kNIsPEH2unh3fiqFsjCrfUUU6G'),
('sofi', 'estudiante', '$2y$10$hlpDqm7REZbdYGlj.uFL6Onl.4DHqxU.cKt6521Mkw9TaWxYD5yO2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `rol_institucion` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `usuario`, `contrasena`, `rol_institucion`) VALUES
(1, 'm', '$2y$10$aqVdVSAm9b5wYkcOYIVS6.VPbGYi/Z9eJLFpEWAEX2RhChJB85Try', 'm'),
(2, 'h', '$2y$10$QxFeKPSTyX35iJ6QkuXAVONx0Zt0Kv/GiBf00hCC3B.I9seGK41Oe', 'h'),
(3, 'u', '$2y$10$knkoEcSDjbqLYtK1pwEgUuzvhzPCXB1VEKBkXEg.PPPqSDt2Wl5JC', 'u'),
(4, 'o', '$2y$10$pc9ES1CEanMcOspaJWC3c.LqXg6t5Mf9P4mxa/aoX9J2FL1Hp0x.G', 'o'),
(5, '12', '$2y$10$uMxyQ5qS1faNv69FXvOrke2J4KjKWqreIDY26SDqg.RYxnR/S6scO', '12'),
(6, 'x', '$2y$10$bdt6f3RyEFVSRp89FNndGuLiAAPNKZuiTaA7ca3Ekwl/McEHGC96G', 'x'),
(7, 'deisy', '$2y$10$y5DL.zPLkTrSRH4nccTvee4sxDCKlnYmFEgyKAKm7BAGWX/JwhSyK', 'inf');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `registro`
--
ALTER TABLE `registro`
  ADD PRIMARY KEY (`usuario`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
