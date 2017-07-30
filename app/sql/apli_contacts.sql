-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Dim 30 Juillet 2017 à 15:58
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
  PRIMARY KEY (`id_categorie`),
  KEY `id_categorie` (`id_categorie`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

-- --------------------------------------------------------

--
-- Structure de la table `contacts`
--

CREATE TABLE IF NOT EXISTS `contacts` (
  `id_contacts` int(11) NOT NULL AUTO_INCREMENT,
  `nom_contacts` char(40) CHARACTER SET utf8 NOT NULL,
  `prenom_contacts` char(40) CHARACTER SET utf8 NOT NULL,
  `email_contacts` char(90) CHARACTER SET utf8 NOT NULL,
  `FK_Categorie` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_contacts`),
  KEY `FK_Categorie` (`FK_Categorie`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=80 ;

--
-- Contenu de la table `contacts`
--

INSERT INTO `contacts` (`id_contacts`, `nom_contacts`, `prenom_contacts`, `email_contacts`, `FK_Categorie`) VALUES
(58, 'marion', 'kokoi', 'marionk@gmail.com', 0),
(67, 'dany', 'zouko', 'danyz@gmail.com', 0),
(68, 'tiffany', 'leclerc', 'tiffanyl@gmail.com', 0),
(69, 'frederic', 'blem', 'fredericblem@gmail.com', 0),
(70, 'thierry', 'monse', 'thierrymonse@gmail.com', 0),
(71, 'clement', 'lermitte', 'clementlermitte@gmail.com', 0),
(72, 'sarah', 'frise', 'sarahf@gmail.com', 0),
(73, 'clemence', 'thois', 'clementthois@gmail.com', 0),
(74, 'david', 'blouh', 'davidb@gmail.com', 0),
(75, 'florence', 'flitouh', 'florencef@gmail.com', 0),
(77, 'murielle', 'routier', 'murielleroutier@gmail.com', 0);

-- --------------------------------------------------------

--
-- Structure de la table `t_contact`
--

CREATE TABLE IF NOT EXISTS `t_contact` (
  `id` int(11) NOT NULL,
  `nom` varchar(64) DEFAULT NULL,
  `prenom` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `telephone` bigint(14) DEFAULT NULL,
  `adresse` varchar(256) DEFAULT NULL,
  `anniversaire` int(14) DEFAULT NULL,
  `autres` varchar(512) DEFAULT NULL,
  `fk_id_categorie` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_id_categorie` (`fk_id_categorie`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `t_contact`
--
ALTER TABLE `t_contact`
  ADD CONSTRAINT `t_contact_ibfk_1` FOREIGN KEY (`fk_id_categorie`) REFERENCES `categorie` (`id_categorie`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
