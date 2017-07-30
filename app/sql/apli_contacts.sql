-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Dim 30 Juillet 2017 à 13:13
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `apli_contacts`
--

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

CREATE TABLE IF NOT EXISTS `categorie` (
  `id_categorie` int(11) NOT NULL,
  `nom_categorie` varchar(128) NOT NULL,
  PRIMARY KEY (`id_categorie`),
  KEY `nom_categorie` (`nom_categorie`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `contacts`
--

CREATE TABLE IF NOT EXISTS `contacts` (
  `id_contacts` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nom_contacts` char(40) CHARACTER SET utf8 NOT NULL,
  `prenom_contacts` char(40) CHARACTER SET utf8 NOT NULL,
  `email_contacts` char(90) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id_contacts`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=78 ;

--
-- Contenu de la table `contacts`
--

INSERT INTO `contacts` (`id_contacts`, `nom_contacts`, `prenom_contacts`, `email_contacts`) VALUES
(35, 'justine', 'koko', 'justinekoko@gmail.com'),
(58, 'marion', 'kokoi', 'marionk@gmail.com'),
(67, 'dany', 'zouko', 'danyz@gmail.com'),
(68, 'tiffany', 'leclerc', 'tiffanyl@gmail.com'),
(69, 'frederic', 'blem', 'fredericblem@gmail.com'),
(70, 'thierry', 'monse', 'thierrymonse@gmail.com'),
(71, 'clement', 'lermitte', 'clementlermitte@gmail.com'),
(72, 'sarah', 'frise', 'sarahf@gmail.com'),
(73, 'clemence', 'thois', 'clementthois@gmail.com'),
(74, 'david', 'blouh', 'davidb@gmail.com'),
(75, 'florence', 'flitouh', 'florencef@gmail.com'),
(77, 'murielle', 'routier', 'murielleroutier@gmail.com');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
