-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Ven 04 Août 2017 à 15:00
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
  `id_categorie` int(11) NOT NULL AUTO_INCREMENT,
  `nom_categorie` varchar(128) NOT NULL,
  PRIMARY KEY (`id_categorie`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=32 ;

--
-- Contenu de la table `categorie`
--

INSERT INTO `categorie` (`id_categorie`, `nom_categorie`) VALUES
(10, 'Aucune Categorie'),
(27, 'Famille'),
(30, 'Pro'),
(31, 'juju');

--
-- Déclencheurs `categorie`
--
DROP TRIGGER IF EXISTS `set_no_categories`;
DELIMITER //
CREATE TRIGGER `set_no_categories` AFTER DELETE ON `categorie`
 FOR EACH ROW UPDATE contacts INNER JOIN categorie SET contacts.FK_Categorie = 10 WHERE contacts.FK_Categorie NOT IN (SELECT categorie.id_categorie FROM categorie)
//
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `contacts`
--

CREATE TABLE IF NOT EXISTS `contacts` (
  `id_contacts` int(11) NOT NULL AUTO_INCREMENT,
  `nom_contacts` char(40) CHARACTER SET utf8 NOT NULL,
  `prenom_contacts` char(40) CHARACTER SET utf8 NOT NULL,
  `email_contacts` char(90) CHARACTER SET utf8 NOT NULL,
  `FK_Categorie` int(11) NOT NULL,
  PRIMARY KEY (`id_contacts`),
  KEY `FK_Categorie` (`FK_Categorie`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=78 ;

--
-- Contenu de la table `contacts`
--

INSERT INTO `contacts` (`id_contacts`, `nom_contacts`, `prenom_contacts`, `email_contacts`, `FK_Categorie`) VALUES
(58, 'marion', 'kokoi', 'marionk@gmail.com', 27),
(67, 'dany', 'zouko', 'danyz@gmail.com', 10),
(68, 'tiffany', 'leclerc', 'tiffanyl@gmail.com', 10),
(69, 'frederic', 'blem', 'fredericblem@gmail.com', 10),
(70, 'thierry', 'monse', 'thierrymonse@gmail.com', 10),
(71, 'clement', 'lermitte', 'clementlermitte@gmail.com', 30),
(72, 'sarah', 'frise', 'sarahf@gmail.com', 10),
(73, 'clemence', 'thois', 'clementthois@gmail.com', 27),
(74, 'david', 'blouh', 'davidb@gmail.com', 10),
(75, 'florence', 'flitouh', 'florencef@gmail.com', 30),
(77, 'murielle', 'routier', 'murielleroutier@gmail.com', 10);

--
-- Déclencheurs `contacts`
--
DROP TRIGGER IF EXISTS `set_no_categorie`;
DELIMITER //
CREATE TRIGGER `set_no_categorie` AFTER DELETE ON `contacts`
 FOR EACH ROW UPDATE contacts INNER JOIN categorie SET contacts.FK_Categorie = 10 WHERE contacts.FK_Categorie NOT IN (SELECT categorie.id_categorie FROM categorie)
//
DELIMITER ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
