
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Exportiere Daten aus Tabelle kinoticketreservierungssystem.Booking: ~0 rows (ungefähr)
DELETE FROM `TemplateSeat`;
DELETE FROM `show_event`;
DELETE FROM `seatplan`;
DELETE FROM `Seat`;
DELETE FROM `Hall`;
DELETE FROM `SeatplanTemplate`;
DELETE FROM `playsIn`;
DELETE FROM `movie_genre`;
DELETE FROM `directs`;
DELETE FROM `movie`;
DELETE FROM `Customer`;
DELETE FROM `genre`;
DELETE FROM `Cinema`;
DELETE FROM `BookingPosition`;
DELETE FROM `Booking`;
DELETE FROM `City`;
DELETE FROM `person`;
/*!40000 ALTER TABLE `Booking` DISABLE KEYS */;
/*!40000 ALTER TABLE `Booking` ENABLE KEYS */;

-- Exportiere Daten aus Tabelle kinoticketreservierungssystem.person: ~2 rows (ungefähr)

/*!40000 ALTER TABLE `person` DISABLE KEYS */;
INSERT INTO `person` (`PID`, `Firstname`, `Lastname`) VALUES
	(1, 'Finn', 'Hülsbusch'),
	(2, 'Daniel', 'Kerger');
/*!40000 ALTER TABLE `person` ENABLE KEYS */;

-- Exportiere Daten aus Tabelle kinoticketreservierungssystem.BookingPosition: ~0 rows (ungefähr)

/*!40000 ALTER TABLE `BookingPosition` DISABLE KEYS */;
/*!40000 ALTER TABLE `BookingPosition` ENABLE KEYS */;

-- Exportiere Daten aus Tabelle kinoticketreservierungssystem.City: ~1 rows (ungefähr)

/*!40000 ALTER TABLE `City` DISABLE KEYS */;
INSERT INTO `City` (`PLZ`, `City`) VALUES
	(48151, 'Münster');
/*!40000 ALTER TABLE `City` ENABLE KEYS */;

-- Exportiere Daten aus Tabelle kinoticketreservierungssystem.Cinema: ~1 rows (ungefähr)

/*!40000 ALTER TABLE `Cinema` DISABLE KEYS */;
INSERT INTO `Cinema` (`CID`, `Street`, `HausNr`, `PLZ`, `EMail`, `TelNr`) VALUES
	(1, 'Bahnhofstraße ', 1, 48151, 'cinema@test.com', '0251988592636');
/*!40000 ALTER TABLE `Cinema` ENABLE KEYS */;

-- Exportiere Daten aus Tabelle kinoticketreservierungssystem.genre: ~0 rows (ungefähr)

/*!40000 ALTER TABLE `genre` DISABLE KEYS */;
INSERT INTO `genre` (`GID`, `Name`, `Beschreibung`) VALUES
	(1, 'Fantasy', 'Spielen in einer Fantasiewelt');
/*!40000 ALTER TABLE `genre` ENABLE KEYS */;

-- Exportiere Daten aus Tabelle kinoticketreservierungssystem.Customer: ~0 rows (ungefähr)

/*!40000 ALTER TABLE `Customer` DISABLE KEYS */;
/*!40000 ALTER TABLE `Customer` ENABLE KEYS */;

-- Exportiere Daten aus Tabelle kinoticketreservierungssystem.movie: ~0 rows (ungefähr)

/*!40000 ALTER TABLE `movie` DISABLE KEYS */;
INSERT INTO `movie` (`MID`, `Title`, `Publishing_date`, `length`, `FSK`, `Description`, `booked_counter`, `Prod_country`, `Trailer`, `Cover`) VALUES
	(1, 'Testfilm', '2020-09-07', 120, 12, 'Ein ganz simpler Testfilm', 0, 'De', 'keiner', NULL),
	(2, 'Testfilm2', '2020-09-07', 120, 0, 'huiiiiiiii', 4711, 'USA', 'keiner', NULL);
/*!40000 ALTER TABLE `movie` ENABLE KEYS */;

-- Exportiere Daten aus Tabelle kinoticketreservierungssystem.directs: ~0 rows (ungefähr)

/*!40000 ALTER TABLE `directs` DISABLE KEYS */;
/*!40000 ALTER TABLE `directs` ENABLE KEYS */;

-- Exportiere Daten aus Tabelle kinoticketreservierungssystem.movie_genre: ~0 rows (ungefähr)

/*!40000 ALTER TABLE `movie_genre` DISABLE KEYS */;
INSERT INTO `movie_genre` (`GID`, `MID`) VALUES
	(1, 1),
	(1, 2);
/*!40000 ALTER TABLE `movie_genre` ENABLE KEYS */;

-- Exportiere Daten aus Tabelle kinoticketreservierungssystem.playsIn: ~0 rows (ungefähr)

/*!40000 ALTER TABLE `playsIn` DISABLE KEYS */;
/*!40000 ALTER TABLE `playsIn` ENABLE KEYS */;

-- Exportiere Daten aus Tabelle kinoticketreservierungssystem.Seat: ~0 rows (ungefähr)

/*!40000 ALTER TABLE `Seat` DISABLE KEYS */;
/*!40000 ALTER TABLE `Seat` ENABLE KEYS */;

-- Exportiere Daten aus Tabelle kinoticketreservierungssystem.seatplan: ~1 rows (ungefähr)



-- Exportiere Daten aus Tabelle kinoticketreservierungssystem.SeatplanTemplate: ~1 rows (ungefähr)

/*!40000 ALTER TABLE `SeatplanTemplate` DISABLE KEYS */;
INSERT INTO `SeatplanTemplate` (`SpTID`, `TotalNumberOfSeats`) VALUES
	(1, 4711);
/*!40000 ALTER TABLE `SeatplanTemplate` ENABLE KEYS */;



-- Exportiere Daten aus Tabelle kinoticketreservierungssystem.Hall: ~1 rows (ungefähr)

/*!40000 ALTER TABLE `Hall` DISABLE KEYS */;
INSERT INTO `Hall` (`HID`, `Accessible`, `CID`, `SpTID`) VALUES
	(1, 0, 1, 1);
/*!40000 ALTER TABLE `Hall` ENABLE KEYS */;

/*!40000 ALTER TABLE `seatplan` DISABLE KEYS */;
INSERT INTO `seatplan` (`SpID`, `SpTID`, `HID`) VALUES
	(1, 1, 1);
/*!40000 ALTER TABLE `seatplan` ENABLE KEYS */;

-- Exportiere Daten aus Tabelle kinoticketreservierungssystem.show_event: ~0 rows (ungefähr)

/*!40000 ALTER TABLE `show_event` DISABLE KEYS */;
INSERT INTO `show_event` (`SID`, `Date_Time`, `Is3D`, `MID`, `Sep_ID`) VALUES
	(1, '2020-10-14 16:30:00', 0, 1, 1);
/*!40000 ALTER TABLE `show_event` ENABLE KEYS */;

-- Exportiere Daten aus Tabelle kinoticketreservierungssystem.TemplateSeat: ~0 rows (ungefähr)

/*!40000 ALTER TABLE `TemplateSeat` DISABLE KEYS */;
/*!40000 ALTER TABLE `TemplateSeat` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
