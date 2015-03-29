CREATE DATABASE chat;

USE chat;


-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Message'
--
-- ---

DROP TABLE IF EXISTS `Messages`;

CREATE TABLE `Messages` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `text` MEDIUMTEXT,
  `userid` INTEGER,
  `roomid` INTEGER,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'user'
--
-- ---

DROP TABLE IF EXISTS `Users`;

CREATE TABLE `Users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'room'
--
-- ---

DROP TABLE IF EXISTS `Rooms`;

CREATE TABLE `Rooms` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `roomname` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `Messages` ADD FOREIGN KEY (userid) REFERENCES `Users` (`id`);
ALTER TABLE `Messages` ADD FOREIGN KEY (roomid) REFERENCES `Rooms` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Message` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `user` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `room` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Message` (`id`,`text`,`userid`,`roomid`) VALUES
-- ('','','','');
-- INSERT INTO `user` (`id`,`username`) VALUES
-- ('','');
-- INSERT INTO `room` (`id`,`roomname`) VALUES
-- ('','');





/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

