DROP DATABASE IF EXISTS gather;

CREATE DATABASE gather;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

USE gather;

CREATE TABLE `gather` (
        `id` INT,
        `userId` INT, 
        `title` VARCHAR(255),
        `content` VARCHAR(255),
        `store` VARCHAR(255),
        `targetMoney` INT,
        `status` INT);