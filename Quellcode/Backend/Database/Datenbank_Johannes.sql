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

-- Exportiere Struktur von Tabelle kinoticketreservierungssystem.booking
CREATE TABLE IF NOT EXISTS `booking` (
  `BID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `DateTime` datetime NOT NULL,
  `CuID` int(10) unsigned NOT NULL,
  `Booking` tinyint(1) DEFAULT NULL,
  `totalPrice` decimal(8,2) NOT NULL,
  PRIMARY KEY (`BID`),
  KEY `Booking_FK` (`CuID`),
  CONSTRAINT `Booking_FK` FOREIGN KEY (`CuID`) REFERENCES `customer` (`CuID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Exportiere Daten aus Tabelle kinoticketreservierungssystem.booking: ~0 rows (ungefähr)
DELETE FROM `booking`;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle kinoticketreservierungssystem.cinema
CREATE TABLE IF NOT EXISTS `cinema` (
  `CID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Street` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `HausNr` int(11) NOT NULL,
  `PLZ` int(5) NOT NULL,
  `EMail` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`CID`),
  KEY `Cinema_FK` (`PLZ`),
  CONSTRAINT `Cinema_FK` FOREIGN KEY (`PLZ`) REFERENCES `city` (`PLZ`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Exportiere Daten aus Tabelle kinoticketreservierungssystem.cinema: ~0 rows (ungefähr)
DELETE FROM `cinema`;
/*!40000 ALTER TABLE `cinema` DISABLE KEYS */;
/*!40000 ALTER TABLE `cinema` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle kinoticketreservierungssystem.city
CREATE TABLE IF NOT EXISTS `city` (
  `PLZ` int(5) NOT NULL,
  `City` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`PLZ`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Exportiere Daten aus Tabelle kinoticketreservierungssystem.city: ~0 rows (ungefähr)
DELETE FROM `city`;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
/*!40000 ALTER TABLE `city` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle kinoticketreservierungssystem.customer
CREATE TABLE IF NOT EXISTS `customer` (
  `CuID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `DateOfBirth` date NOT NULL,
  `Password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `PID` int(10) unsigned NOT NULL,
  PRIMARY KEY (`CuID`),
  UNIQUE KEY `Customer_UN` (`PID`),
  CONSTRAINT `Customer_FK` FOREIGN KEY (`PID`) REFERENCES `person` (`PID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Exportiere Daten aus Tabelle kinoticketreservierungssystem.customer: ~0 rows (ungefähr)
DELETE FROM `customer`;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle kinoticketreservierungssystem.directs
CREATE TABLE IF NOT EXISTS `directs` (
  `PID` int(10) unsigned NOT NULL,
  `MID` int(10) unsigned NOT NULL,
  PRIMARY KEY (`PID`,`MID`),
  KEY `directs_FK_1` (`MID`),
  CONSTRAINT `directs_FK` FOREIGN KEY (`PID`) REFERENCES `person` (`PID`),
  CONSTRAINT `directs_FK_1` FOREIGN KEY (`MID`) REFERENCES `movie` (`MID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Exportiere Daten aus Tabelle kinoticketreservierungssystem.directs: ~0 rows (ungefähr)
DELETE FROM `directs`;
/*!40000 ALTER TABLE `directs` DISABLE KEYS */;
/*!40000 ALTER TABLE `directs` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle kinoticketreservierungssystem.genre
CREATE TABLE IF NOT EXISTS `genre` (
  `GID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Beschreibung` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`GID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Exportiere Daten aus Tabelle kinoticketreservierungssystem.genre: ~0 rows (ungefähr)
DELETE FROM `genre`;
/*!40000 ALTER TABLE `genre` DISABLE KEYS */;
/*!40000 ALTER TABLE `genre` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle kinoticketreservierungssystem.hall
CREATE TABLE IF NOT EXISTS `hall` (
  `HID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Accessible` tinyint(1) DEFAULT 0,
  `CID` int(10) unsigned NOT NULL,
  PRIMARY KEY (`HID`),
  KEY `Hall_FK` (`CID`),
  CONSTRAINT `Hall_FK` FOREIGN KEY (`CID`) REFERENCES `cinema` (`CID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Exportiere Daten aus Tabelle kinoticketreservierungssystem.hall: ~0 rows (ungefähr)
DELETE FROM `hall`;
/*!40000 ALTER TABLE `hall` DISABLE KEYS */;
/*!40000 ALTER TABLE `hall` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle kinoticketreservierungssystem.movie
CREATE TABLE IF NOT EXISTS `movie` (
  `MID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `PublishingDate` date NOT NULL,
  `length` int(3) unsigned NOT NULL,
  `FSK` int(2) unsigned NOT NULL,
  PRIMARY KEY (`MID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Exportiere Daten aus Tabelle kinoticketreservierungssystem.movie: ~0 rows (ungefähr)
DELETE FROM `movie`;
/*!40000 ALTER TABLE `movie` DISABLE KEYS */;
/*!40000 ALTER TABLE `movie` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle kinoticketreservierungssystem.moviegenre
CREATE TABLE IF NOT EXISTS `moviegenre` (
  `GID` int(10) unsigned NOT NULL,
  `MID` int(10) unsigned NOT NULL,
  PRIMARY KEY (`GID`,`MID`),
  KEY `MovieGenre_FK` (`MID`),
  CONSTRAINT `MovieGenre_FK` FOREIGN KEY (`MID`) REFERENCES `movie` (`MID`),
  CONSTRAINT `MovieGenre_FK_1` FOREIGN KEY (`GID`) REFERENCES `genre` (`GID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Exportiere Daten aus Tabelle kinoticketreservierungssystem.moviegenre: ~0 rows (ungefähr)
DELETE FROM `moviegenre`;
/*!40000 ALTER TABLE `moviegenre` DISABLE KEYS */;
/*!40000 ALTER TABLE `moviegenre` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle kinoticketreservierungssystem.person
CREATE TABLE IF NOT EXISTS `person` (
  `PID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `Firstname` varchar(25) NOT NULL,
  `Lastname` varchar(30) NOT NULL,
  PRIMARY KEY (`PID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='Generelle Person ';

-- Exportiere Daten aus Tabelle kinoticketreservierungssystem.person: ~2 rows (ungefähr)
DELETE FROM `person`;
/*!40000 ALTER TABLE `person` DISABLE KEYS */;
INSERT INTO `person` (`PID`, `Firstname`, `Lastname`) VALUES
	(1, 'Finn', 'Hülsbusch'),
	(2, 'Daniel', 'Kerger');
/*!40000 ALTER TABLE `person` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle kinoticketreservierungssystem.playsin
CREATE TABLE IF NOT EXISTS `playsin` (
  `PID` int(10) unsigned NOT NULL,
  `MID` int(10) unsigned NOT NULL,
  PRIMARY KEY (`MID`,`PID`),
  KEY `playsIn_FK_1` (`PID`),
  CONSTRAINT `playsIn_FK` FOREIGN KEY (`MID`) REFERENCES `movie` (`MID`),
  CONSTRAINT `playsIn_FK_1` FOREIGN KEY (`PID`) REFERENCES `person` (`PID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Exportiere Daten aus Tabelle kinoticketreservierungssystem.playsin: ~0 rows (ungefähr)
DELETE FROM `playsin`;
/*!40000 ALTER TABLE `playsin` DISABLE KEYS */;
/*!40000 ALTER TABLE `playsin` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle kinoticketreservierungssystem.showevent
CREATE TABLE IF NOT EXISTS `showevent` (
  `SID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `DateTime` datetime NOT NULL,
  `Price` decimal(8,2) DEFAULT 12.50,
  `Is3D` tinyint(1) DEFAULT 0,
  `MID` int(10) unsigned NOT NULL,
  PRIMARY KEY (`SID`),
  KEY `ShowEvent_FK` (`MID`),
  CONSTRAINT `ShowEvent_FK` FOREIGN KEY (`MID`) REFERENCES `movie` (`MID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Exportiere Daten aus Tabelle kinoticketreservierungssystem.showevent: ~0 rows (ungefähr)
DELETE FROM `showevent`;
/*!40000 ALTER TABLE `showevent` DISABLE KEYS */;
/*!40000 ALTER TABLE `showevent` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
