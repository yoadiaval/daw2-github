-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 31, 2024 at 11:53 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `videoclub`
--

-- --------------------------------------------------------

--
-- Table structure for table `cintavideo`
--

CREATE TABLE `cintavideo` (
  `cod_soporte` varchar(255) NOT NULL,
  `duracion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cintavideo`
--

INSERT INTO `cintavideo` (`cod_soporte`, `duracion`) VALUES
('S004', 120),
('S006', 90);

-- --------------------------------------------------------

--
-- Table structure for table `cliente`
--

CREATE TABLE `cliente` (
  `id` varchar(255) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cliente`
--

INSERT INTO `cliente` (`id`, `nombre`) VALUES
('C001', 'Juan Pérez'),
('C002', 'Ana Gómez'),
('C003', 'Carlos Fernández');

-- --------------------------------------------------------

--
-- Table structure for table `cliente_soporte`
--

CREATE TABLE `cliente_soporte` (
  `cliente_id` varchar(255) NOT NULL,
  `soporte_cod` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `dvd`
--

CREATE TABLE `dvd` (
  `cod_soporte` varchar(255) NOT NULL,
  `idioma` varchar(255) DEFAULT NULL,
  `formatoPantalla` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dvd`
--

INSERT INTO `dvd` (`cod_soporte`, `idioma`, `formatoPantalla`) VALUES
('S002', 'Español', '16:9'),
('S005', 'Inglés', '4:3');

-- --------------------------------------------------------

--
-- Table structure for table `juego`
--

CREATE TABLE `juego` (
  `cod_soporte` varchar(255) NOT NULL,
  `consola` varchar(255) DEFAULT NULL,
  `minJugadores` int(11) DEFAULT NULL,
  `maxJugadores` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `juego`
--

INSERT INTO `juego` (`cod_soporte`, `consola`, `minJugadores`, `maxJugadores`) VALUES
('S001', 'PlayStation 5', 1, 4),
('S003', 'Xbox Series X', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `soporte`
--

CREATE TABLE `soporte` (
  `cod` varchar(255) NOT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `precio` decimal(10,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `soporte`
--

INSERT INTO `soporte` (`cod`, `titulo`, `precio`) VALUES
('S001', 'Juego de Aventura', 30),
('S002', 'Película de Acción', 15),
('S003', 'Cinta de Video Clásica', 10),
('S004', 'Juego de Estrategia', 20),
('S005', 'Comedia Romántica', 12),
('S006', 'Documental de Naturaleza', 9);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cintavideo`
--
ALTER TABLE `cintavideo`
  ADD PRIMARY KEY (`cod_soporte`);

--
-- Indexes for table `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cliente_soporte`
--
ALTER TABLE `cliente_soporte`
  ADD PRIMARY KEY (`cliente_id`,`soporte_cod`),
  ADD KEY `fk_soporte_cliente` (`soporte_cod`);

--
-- Indexes for table `dvd`
--
ALTER TABLE `dvd`
  ADD PRIMARY KEY (`cod_soporte`);

--
-- Indexes for table `juego`
--
ALTER TABLE `juego`
  ADD PRIMARY KEY (`cod_soporte`);

--
-- Indexes for table `soporte`
--
ALTER TABLE `soporte`
  ADD PRIMARY KEY (`cod`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cintavideo`
--
ALTER TABLE `cintavideo`
  ADD CONSTRAINT `fk_soporte_cinta` FOREIGN KEY (`cod_soporte`) REFERENCES `soporte` (`cod`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `cliente_soporte`
--
ALTER TABLE `cliente_soporte`
  ADD CONSTRAINT `fk_cliente` FOREIGN KEY (`cliente_id`) REFERENCES `cliente` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_soporte_cliente` FOREIGN KEY (`soporte_cod`) REFERENCES `soporte` (`cod`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `dvd`
--
ALTER TABLE `dvd`
  ADD CONSTRAINT `fk_soporte_dvd` FOREIGN KEY (`cod_soporte`) REFERENCES `soporte` (`cod`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `juego`
--
ALTER TABLE `juego`
  ADD CONSTRAINT `fk_soporte` FOREIGN KEY (`cod_soporte`) REFERENCES `soporte` (`cod`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
