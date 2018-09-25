-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 24, 2018 at 04:00 PM
-- Server version: 5.7.21-1ubuntu1
-- PHP Version: 7.2.9-1+ubuntu18.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `arduina`
--

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `pronom` varchar(255) NOT NULL,
  `societe` varchar(255) NOT NULL,
  `ville` varchar(255) NOT NULL,
  `ou` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `nom`, `pronom`, `societe`, `ville`, `ou`) VALUES
(1, 'Quel est votre nom Ou avez', 'Quel est votre pronom', 'Quel est votre societe', 'Quel est votre ville', 'Ou avez vous entendu parlé de cet évènement');

-- --------------------------------------------------------

--
-- Table structure for table `reponse_visitor`
--

CREATE TABLE `reponse_visitor` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `pronom` varchar(255) NOT NULL,
  `societe` varchar(255) NOT NULL,
  `ville` varchar(255) NOT NULL,
  `ou` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reponse_visitor`
--
ALTER TABLE `reponse_visitor`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
