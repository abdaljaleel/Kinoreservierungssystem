-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server Version:               10.5.5-MariaDB - mariadb.org binary distribution
-- Server Betriebssystem:        Win64
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Exportiere Datenbank Struktur für kinoticketreservierungssystem
CREATE DATABASE IF NOT EXISTS `kinoticketreservierungssystem` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `kinoticketreservierungssystem`;

-- Exportiere Struktur von Tabelle kinoticketreservierungssystem.person
CREATE TABLE IF NOT EXISTS `person` (
  `PID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `Firstname` varchar(25) NOT NULL,
  `Lastname` varchar(30) NOT NULL,
  PRIMARY KEY (`PID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='Generelle Person ';

-- Exportiere Daten aus Tabelle kinoticketreservierungssystem.person: ~0 rows (ungefähr)
/*!40000 ALTER TABLE `person` DISABLE KEYS */;
INSERT INTO `person` (`PID`, `Firstname`, `Lastname`) VALUES
	(1, 'Finn', 'Hülsbusch'),
	(2, 'Daniel', 'Kerger');
/*!40000 ALTER TABLE `person` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
