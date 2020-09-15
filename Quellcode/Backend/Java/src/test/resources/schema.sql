

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Exportiere Struktur von Tabelle kinoticketreservierungssystem.City
CREATE TABLE IF NOT EXISTS `City` (
                                      `PLZ` int(5) NOT NULL,
                                      `City` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
                                      PRIMARY KEY (`PLZ`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Daten Export vom Benutzer nicht ausgewählt

-- Exportiere Struktur von Tabelle kinoticketreservierungssystem.Cinema
CREATE TABLE IF NOT EXISTS `Cinema` (
                                        `CID` int(10) unsigned NOT NULL AUTO_INCREMENT,
                                        `Street` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
                                        `HausNr` int(11) NOT NULL,
                                        `PLZ` int(5) NOT NULL,
                                        `EMail` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
                                        `TelNr` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                                        PRIMARY KEY (`CID`),
                                        KEY `Cinema_FK` (`PLZ`),
                                        CONSTRAINT `Cinema_FK` FOREIGN KEY (`PLZ`) REFERENCES `City` (`PLZ`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Daten Export vom Benutzer nicht ausgewählt

-- Exportiere Struktur von Tabelle kinoticketreservierungssystem.SeatplanTemplate
CREATE TABLE IF NOT EXISTS `SeatplanTemplate` (
                                                  `SpTID` int(10) unsigned NOT NULL AUTO_INCREMENT,
                                                  `TotalNumberOfSeats` int(10) unsigned DEFAULT NULL,
                                                  PRIMARY KEY (`SpTID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Daten Export vom Benutzer nicht ausgewählt

-- Exportiere Struktur von Tabelle kinoticketreservierungssystem.Hall
CREATE TABLE IF NOT EXISTS `Hall` (
                                      `HID` int(10) unsigned NOT NULL AUTO_INCREMENT,
                                      `Accessible` tinyint(1) DEFAULT 0,
                                      `CID` int(10) unsigned NOT NULL,
                                      `SpTID` int(10) unsigned NOT NULL,
                                      PRIMARY KEY (`HID`),
                                      KEY `Hall_FK` (`CID`),
                                      KEY `SeatPlan_FK` (`SpTID`),
                                      CONSTRAINT `Hall_FK` FOREIGN KEY (`CID`) REFERENCES `Cinema` (`CID`),
                                      CONSTRAINT `SeatPlan_FK` FOREIGN KEY (`SpTID`) REFERENCES `SeatplanTemplate` (`SpTID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Daten Export vom Benutzer nicht ausgewählt

-- Exportiere Struktur von Tabelle kinoticketreservierungssystem.person
CREATE TABLE IF NOT EXISTS `person` (
                                        `PID` int(11) unsigned NOT NULL AUTO_INCREMENT,
                                        `Firstname` varchar(25) NOT NULL,
                                        `Lastname` varchar(30) NOT NULL,
                                        PRIMARY KEY (`PID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='Generelle Person ';

-- Daten Export vom Benutzer nicht ausgewählt

-- Exportiere Struktur von Tabelle kinoticketreservierungssystem.Customer
CREATE TABLE IF NOT EXISTS `Customer` (
                                          `CuID` int(10) unsigned NOT NULL AUTO_INCREMENT,
                                          `Email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
                                          `DateOfBirth` date NOT NULL,
                                          `Password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
                                          `PID` int(10) unsigned NOT NULL,
                                          PRIMARY KEY (`CuID`),
                                          UNIQUE KEY `Customer_UN` (`PID`),
                                          CONSTRAINT `Customer_FK` FOREIGN KEY (`PID`) REFERENCES `person` (`PID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Daten Export vom Benutzer nicht ausgewählt


-- Exportiere Struktur von Tabelle kinoticketreservierungssystem.Booking
CREATE TABLE IF NOT EXISTS `Booking` (
  `BID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `DateTime` datetime NOT NULL,
  `CuID` int(10) unsigned NOT NULL,
  `payed` tinyint(4) DEFAULT NULL,
  `totalPrice` decimal(8,2) NOT NULL,
  PRIMARY KEY (`BID`),
  KEY `Booking_FK` (`CuID`),
  CONSTRAINT `Booking_FK` FOREIGN KEY (`CuID`) REFERENCES `Customer` (`CuID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Daten Export vom Benutzer nicht ausgewählt



-- Exportiere Struktur von Tabelle kinoticketreservierungssystem.movie
CREATE TABLE IF NOT EXISTS `movie` (
  `MID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Publishing_date` date NOT NULL,
  `length` int(3) unsigned NOT NULL,
  `FSK` int(2) unsigned NOT NULL,
  `Description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `booked_counter` int(11) DEFAULT NULL,
  `Prod_country` tinytext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Trailer` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Cover` blob DEFAULT NULL,
  PRIMARY KEY (`MID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Daten Export vom Benutzer nicht ausgewählt

-- Exportiere Struktur von Tabelle kinoticketreservierungssystem.directs
CREATE TABLE IF NOT EXISTS `directs` (
                                         `PID` int(10) unsigned NOT NULL,
                                         `MID` int(10) unsigned NOT NULL,
                                         PRIMARY KEY (`PID`,`MID`),
                                         KEY `directs_FK_1` (`MID`),
                                         CONSTRAINT `directs_FK` FOREIGN KEY (`PID`) REFERENCES `person` (`PID`),
                                         CONSTRAINT `directs_FK_1` FOREIGN KEY (`MID`) REFERENCES `movie` (`MID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Daten Export vom Benutzer nicht ausgewählt

-- Exportiere Struktur von Tabelle kinoticketreservierungssystem.genre
CREATE TABLE IF NOT EXISTS `genre` (
                                       `GID` int(10) unsigned NOT NULL AUTO_INCREMENT,
                                       `Name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
                                       `Beschreibung` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                                       PRIMARY KEY (`GID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Daten Export vom Benutzer nicht ausgewählt

-- Exportiere Struktur von Tabelle kinoticketreservierungssystem.movie_genre
CREATE TABLE IF NOT EXISTS `movie_genre` (
  `GID` int(10) unsigned NOT NULL,
  `MID` int(10) unsigned NOT NULL,
  PRIMARY KEY (`GID`,`MID`),
  KEY `MovieGenre_FK` (`MID`),
  CONSTRAINT `MovieGenre_FK` FOREIGN KEY (`MID`) REFERENCES `movie` (`MID`),
  CONSTRAINT `MovieGenre_FK_1` FOREIGN KEY (`GID`) REFERENCES `genre` (`GID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Daten Export vom Benutzer nicht ausgewählt



-- Exportiere Struktur von Tabelle kinoticketreservierungssystem.playsIn
CREATE TABLE IF NOT EXISTS `playsIn` (
  `PID` int(10) unsigned NOT NULL,
  `MID` int(10) unsigned NOT NULL,
  PRIMARY KEY (`MID`,`PID`),
  KEY `FK_PID` (`PID`),
  CONSTRAINT `FK_MID` FOREIGN KEY (`MID`) REFERENCES `movie` (`MID`),
  CONSTRAINT `FK_PID` FOREIGN KEY (`PID`) REFERENCES `person` (`PID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Daten Export vom Benutzer nicht ausgewählt


-- Exportiere Struktur von Tabelle kinoticketreservierungssystem.seatplan
CREATE TABLE IF NOT EXISTS `seatplan` (
  `SpID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `SpTID` int(10) unsigned DEFAULT NULL,
  `HID` int(10) unsigned NOT NULL,
  PRIMARY KEY (`SpID`),
  KEY `SpTID` (`SpTID`),
  KEY `HID` (`HID`),
  CONSTRAINT `HID` FOREIGN KEY (`HID`) REFERENCES `Hall` (`HID`),
  CONSTRAINT `SpTID` FOREIGN KEY (`SpTID`) REFERENCES `SeatplanTemplate` (`SpTID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Daten Export vom Benutzer nicht ausgewählt



-- Exportiere Struktur von Tabelle kinoticketreservierungssystem.show_event
CREATE TABLE IF NOT EXISTS `show_event` (
  `SID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Date_Time` datetime NOT NULL,
  `Is3D` tinyint(1) DEFAULT 0,
  `MID` int(10) unsigned NOT NULL,
  `Sep_ID` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`SID`),
  KEY `ShowEvent_FK` (`MID`),
  KEY `SepID` (`Sep_ID`),
  CONSTRAINT `MID` FOREIGN KEY (`MID`) REFERENCES `movie` (`MID`),
  CONSTRAINT `SepID` FOREIGN KEY (`Sep_ID`) REFERENCES `seatplan` (`SpID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Daten Export vom Benutzer nicht ausgewählt

-- Exportiere Struktur von Tabelle kinoticketreservierungssystem.TemplateSeat
CREATE TABLE IF NOT EXISTS `TemplateSeat` (
  `TsID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Row` int(10) unsigned NOT NULL,
  `Column` int(10) unsigned NOT NULL,
  `Handicap` tinyint(4) DEFAULT 0,
  `SplTID` int(10) unsigned DEFAULT NULL,
  `Price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`TsID`),
  KEY `SplTID` (`SplTID`),
  CONSTRAINT `SplTID` FOREIGN KEY (`SplTID`) REFERENCES `SeatplanTemplate` (`SpTID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Daten Export vom Benutzer nicht ausgewählt



-- Exportiere Struktur von Tabelle kinoticketreservierungssystem.Seat
CREATE TABLE IF NOT EXISTS `Seat` (
                                      `SeID` int(10) unsigned NOT NULL AUTO_INCREMENT,
                                      `Row` tinyint(1) unsigned NOT NULL,
                                      `Seat` tinyint(1) unsigned NOT NULL,
                                      `Booked` tinyint(4) DEFAULT 0,
                                      `Handicap` tinyint(4) DEFAULT 0,
                                      `SpID` int(10) unsigned NOT NULL,
                                      `Price` decimal(10,2) DEFAULT NULL,
                                      PRIMARY KEY (`SeID`),
                                      KEY `SpID` (`SpID`),
                                      CONSTRAINT `SpID` FOREIGN KEY (`SpID`) REFERENCES `seatplan` (`SpID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Daten Export vom Benutzer nicht ausgewählt

-- Exportiere Struktur von Tabelle kinoticketreservierungssystem.BookingPosition
CREATE TABLE IF NOT EXISTS `BookingPosition` (
                                                 `BPID` int(10) unsigned NOT NULL AUTO_INCREMENT,
                                                 `BID` int(10) unsigned DEFAULT NULL,
                                                 `SID` int(10) unsigned DEFAULT NULL,
                                                 `SelD` int(10) unsigned DEFAULT NULL,
                                                 PRIMARY KEY (`BPID`),
                                                 KEY `BID` (`BID`),
                                                 KEY `SID` (`SID`),
                                                 KEY `SeID` (`SelD`),
                                                 CONSTRAINT `BID` FOREIGN KEY (`BID`) REFERENCES `Booking` (`BID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
                                                 CONSTRAINT `SID` FOREIGN KEY (`SID`) REFERENCES `show_event` (`SID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
                                                 CONSTRAINT `SeID` FOREIGN KEY (`SelD`) REFERENCES `Seat` (`SeID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Daten Export vom Benutzer nicht ausgewählt


/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
