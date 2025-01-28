-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 27, 2025 at 11:00 AM
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
-- Database: `biblioteca`
--

-- --------------------------------------------------------

--
-- Table structure for table `libros`
--

CREATE TABLE `libros` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) DEFAULT NULL,
  `autor` varchar(100) DEFAULT NULL,
  `año_publicacion` int(11) DEFAULT NULL,
  `genero` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `libros`
--

INSERT INTO `libros` (`id`, `titulo`, `autor`, `año_publicacion`, `genero`) VALUES
(1, 'Cien años de soledad', 'Gabriel García Márquez', 1967, 'Realismo mágico'),
(2, '1984', 'George Orwell', 1949, 'Distopía'),
(3, 'Don Quijote de la Mancha', 'Miguel de Cervantes', 1605, 'Novela de caballería'),
(4, 'El Gran Gatsby', 'F. Scott Fitzgerald', 1925, 'Ficción'),
(5, 'La sombra del viento', 'Carlos Ruiz Zafón', 2001, 'Misterio'),
(6, 'Fahrenheit 451', 'Ray Bradbury', 1953, 'Ciencia ficción'),
(7, 'El amor en los tiempos del cólera', 'Gabriel García Márquez', 1985, 'Romántico'),
(8, 'Matar a un ruiseñor', 'Harper Lee', 1960, 'Drama'),
(9, 'Harry Potter y la piedra filosofal', 'J.K. Rowling', 1997, 'Fantasía'),
(10, 'El Hobbit', 'J.R.R. Tolkien', 1937, 'Fantasía');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `libros`
--
ALTER TABLE `libros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
