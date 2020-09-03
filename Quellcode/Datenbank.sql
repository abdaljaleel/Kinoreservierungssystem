-- MariaDB dump 10.17  Distrib 10.5.5-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: Kinoticketreservierungssystem
-- ------------------------------------------------------
-- Server version	10.5.5-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Booking`
--

DROP TABLE IF EXISTS `Booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Booking` (
  `BID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `DateTime` datetime NOT NULL,
  `CuID` int(10) unsigned NOT NULL,
  `Booking` tinyint(1) DEFAULT NULL,
  `totalPrice` decimal(8,2) NOT NULL,
  PRIMARY KEY (`BID`),
  KEY `Booking_FK` (`CuID`),
  CONSTRAINT `Booking_FK` FOREIGN KEY (`CuID`) REFERENCES `Customer` (`CuID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Booking`
--

LOCK TABLES `Booking` WRITE;
/*!40000 ALTER TABLE `Booking` DISABLE KEYS */;
/*!40000 ALTER TABLE `Booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Cinema`
--

DROP TABLE IF EXISTS `Cinema`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Cinema` (
  `CID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Street` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `HausNr` int(11) NOT NULL,
  `PLZ` int(5) NOT NULL,
  `EMail` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`CID`),
  KEY `Cinema_FK` (`PLZ`),
  CONSTRAINT `Cinema_FK` FOREIGN KEY (`PLZ`) REFERENCES `City` (`PLZ`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Cinema`
--

LOCK TABLES `Cinema` WRITE;
/*!40000 ALTER TABLE `Cinema` DISABLE KEYS */;
/*!40000 ALTER TABLE `Cinema` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `City`
--

DROP TABLE IF EXISTS `City`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `City` (
  `PLZ` int(5) NOT NULL,
  `City` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`PLZ`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `City`
--

LOCK TABLES `City` WRITE;
/*!40000 ALTER TABLE `City` DISABLE KEYS */;
/*!40000 ALTER TABLE `City` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Customer`
--

DROP TABLE IF EXISTS `Customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Customer` (
  `CuID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `DateOfBirth` date NOT NULL,
  `Password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `PID` int(10) unsigned NOT NULL,
  PRIMARY KEY (`CuID`),
  UNIQUE KEY `Customer_UN` (`PID`),
  CONSTRAINT `Customer_FK` FOREIGN KEY (`PID`) REFERENCES `person` (`PID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Customer`
--

LOCK TABLES `Customer` WRITE;
/*!40000 ALTER TABLE `Customer` DISABLE KEYS */;
/*!40000 ALTER TABLE `Customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Genre`
--

DROP TABLE IF EXISTS `Genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Genre` (
  `GID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Beschreibung` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`GID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Genre`
--

LOCK TABLES `Genre` WRITE;
/*!40000 ALTER TABLE `Genre` DISABLE KEYS */;
/*!40000 ALTER TABLE `Genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Hall`
--

DROP TABLE IF EXISTS `Hall`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Hall` (
  `HID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Accessible` tinyint(1) DEFAULT 0,
  `CID` int(10) unsigned NOT NULL,
  PRIMARY KEY (`HID`),
  KEY `Hall_FK` (`CID`),
  CONSTRAINT `Hall_FK` FOREIGN KEY (`CID`) REFERENCES `Cinema` (`CID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Hall`
--

LOCK TABLES `Hall` WRITE;
/*!40000 ALTER TABLE `Hall` DISABLE KEYS */;
/*!40000 ALTER TABLE `Hall` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Movie`
--

DROP TABLE IF EXISTS `Movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Movie` (
  `MID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `PublishingDate` date NOT NULL,
  `length` int(3) unsigned NOT NULL,
  `FSK` int(2) unsigned NOT NULL,
  PRIMARY KEY (`MID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Movie`
--

LOCK TABLES `Movie` WRITE;
/*!40000 ALTER TABLE `Movie` DISABLE KEYS */;
/*!40000 ALTER TABLE `Movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MovieGenre`
--

DROP TABLE IF EXISTS `MovieGenre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MovieGenre` (
  `GID` int(10) unsigned NOT NULL,
  `MID` int(10) unsigned NOT NULL,
  PRIMARY KEY (`GID`,`MID`),
  KEY `MovieGenre_FK` (`MID`),
  CONSTRAINT `MovieGenre_FK` FOREIGN KEY (`MID`) REFERENCES `Movie` (`MID`),
  CONSTRAINT `MovieGenre_FK_1` FOREIGN KEY (`GID`) REFERENCES `Genre` (`GID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MovieGenre`
--

LOCK TABLES `MovieGenre` WRITE;
/*!40000 ALTER TABLE `MovieGenre` DISABLE KEYS */;
/*!40000 ALTER TABLE `MovieGenre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ShowEvent`
--

DROP TABLE IF EXISTS `ShowEvent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ShowEvent` (
  `SID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `DateTime` datetime NOT NULL,
  `Price` decimal(8,2) DEFAULT 12.50,
  `Is3D` tinyint(1) DEFAULT 0,
  `MID` int(10) unsigned NOT NULL,
  PRIMARY KEY (`SID`),
  KEY `ShowEvent_FK` (`MID`),
  CONSTRAINT `ShowEvent_FK` FOREIGN KEY (`MID`) REFERENCES `Movie` (`MID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ShowEvent`
--

LOCK TABLES `ShowEvent` WRITE;
/*!40000 ALTER TABLE `ShowEvent` DISABLE KEYS */;
/*!40000 ALTER TABLE `ShowEvent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `directs`
--

DROP TABLE IF EXISTS `directs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `directs` (
  `PID` int(10) unsigned NOT NULL,
  `MID` int(10) unsigned NOT NULL,
  PRIMARY KEY (`PID`,`MID`),
  KEY `directs_FK_1` (`MID`),
  CONSTRAINT `directs_FK` FOREIGN KEY (`PID`) REFERENCES `person` (`PID`),
  CONSTRAINT `directs_FK_1` FOREIGN KEY (`MID`) REFERENCES `Movie` (`MID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `directs`
--

LOCK TABLES `directs` WRITE;
/*!40000 ALTER TABLE `directs` DISABLE KEYS */;
/*!40000 ALTER TABLE `directs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `person`
--

DROP TABLE IF EXISTS `person`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `person` (
  `PID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `Firstname` varchar(25) NOT NULL,
  `Lastname` varchar(30) NOT NULL,
  PRIMARY KEY (`PID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='Generelle Person ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `person`
--

LOCK TABLES `person` WRITE;
/*!40000 ALTER TABLE `person` DISABLE KEYS */;
INSERT INTO `person` VALUES (1,'Finn','Hülsbusch'),(2,'Daniel','Kerger');
/*!40000 ALTER TABLE `person` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `playsIn`
--

DROP TABLE IF EXISTS `playsIn`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `playsIn` (
  `PID` int(10) unsigned NOT NULL,
  `MID` int(10) unsigned NOT NULL,
  PRIMARY KEY (`MID`,`PID`),
  KEY `playsIn_FK_1` (`PID`),
  CONSTRAINT `playsIn_FK` FOREIGN KEY (`MID`) REFERENCES `Movie` (`MID`),
  CONSTRAINT `playsIn_FK_1` FOREIGN KEY (`PID`) REFERENCES `person` (`PID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playsIn`
--

LOCK TABLES `playsIn` WRITE;
/*!40000 ALTER TABLE `playsIn` DISABLE KEYS */;
/*!40000 ALTER TABLE `playsIn` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'Kinoticketreservierungssystem'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-03 12:39:07
