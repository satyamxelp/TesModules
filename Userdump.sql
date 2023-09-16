-- MySQL dump 10.13  Distrib 8.0.34, for Linux (x86_64)
--
-- Host: localhost    Database: Assignment
-- ------------------------------------------------------
-- Server version	8.0.34-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_image` varchar(255) DEFAULT NULL,
  `total_orders` int DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `last_logged_in` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_email` (`user_email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES ('03badcbb-51d1-4c26-8dad-23b1b205b341','Mukesh@99','mukesh@email.com','satyam@099','www.image.com',70,'2023-09-16 02:52:04',NULL,'2023-09-16 02:52:04','2023-09-16 02:52:04'),('5ea21fc0-7089-4de3-b594-a22067cb2bab','satyam@99','satyam99@gmail.com','$2b$10$7E8DVQdU8WaQZ6lzEk.Jku23yWGvkjQpYVSKwEiThrSnnjohIRuwG',NULL,0,'2023-09-16 04:39:00',NULL,'2023-09-16 04:39:00','2023-09-16 04:39:00'),('6c830269-aa36-4f22-9266-855321798f85','satyamcse@999','examplor@gmail.com','satyam@099','gcghcjcgcgjcjgcchgcg',50,'2023-09-16 05:24:12',NULL,'2023-09-16 05:24:12','2023-09-16 05:26:35'),('6eb3ffb6-eb25-4541-ace0-15e850de1396','Ganeesh@99','Ganesh@email.com','satyam@099','www.image.com',80,'2023-09-16 02:52:39',NULL,'2023-09-16 02:52:39','2023-09-16 02:52:39'),('7e9b9c1e-58d5-4529-9d43-779a1289e523','Rakesh@99','rakesh@email.com','satyam@099','www.image.com',50,'2023-09-16 02:51:22',NULL,'2023-09-16 02:51:22','2023-09-16 02:51:22'),('8ed01dcc-471a-4752-a1d7-45f64008fdf5','sataymcse99','satyamcse99@yahoo.com','$2b$10$yOXUMTCCMKDQm7G8HYRT4uE33H/FM9m2XpG37CAgil8jYuFjDb16e',NULL,0,'2023-09-16 05:22:23',NULL,'2023-09-16 05:22:23','2023-09-16 05:22:23'),('91d9a2be-c4b5-4643-998c-6fe093ae7681','Dinsesh@99','Dinesh@email.com','satyam@099','www.image.com',100,'2023-09-16 03:19:44',NULL,'2023-09-16 03:19:44','2023-09-16 03:19:44'),('9703f227-8267-4b30-8657-802e77af1750','satyamsingh','bittu@email.com','$2b$10$/V0EbMKWs/iqeqyKMsL9YOPLVKBuMxkQBzpeT5SKuWnwkZsDsT15a',NULL,0,'2023-09-16 04:33:30',NULL,'2023-09-16 04:33:30','2023-09-16 04:33:30'),('9d928230-a571-4f1f-b40e-c11084afa42b','satyamsingh','Rukesh@email.com','satyam@099',NULL,0,'2023-09-16 03:58:11',NULL,'2023-09-16 03:58:11','2023-09-16 03:58:11'),('c152a56b-9342-4a07-8681-c1d9f9490b75','satyamcse@99','exampleee@email.com','satyam@099','gcghcjcgcgjcjgcchgcg',50,'2023-09-15 15:44:53',NULL,'2023-09-15 15:44:53','2023-09-15 15:50:05'),('e94aa401-ef45-4ed2-bd85-ee2289d0d76b','Mahesh@99','Mahessh@email.com','satyam@099','www.image.com',10,'2023-09-16 02:53:28',NULL,'2023-09-16 02:53:28','2023-09-16 02:53:28'),('edff9598-fb55-47bf-8fe4-bd415702dcb1','satyamsingh','Rukeshh@email.com','satyam@099',NULL,0,'2023-09-16 04:06:35',NULL,'2023-09-16 04:06:35','2023-09-16 04:06:35'),('f08eb473-38a4-487d-be2b-941aa28bc154','Suresh@99','Suresh@email.com','satyam@099','www.image.com',90,'2023-09-16 02:53:05',NULL,'2023-09-16 02:53:05','2023-09-16 02:53:05');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-16 11:02:12
