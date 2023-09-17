DROP DATABASE IF EXISTS GATHER;

CREATE DATABASE GATHER;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

USE GATHER;

CREATE TABLE `GATHER` (
        `id` INT,
        `userId` INT, 
        `title` VARCHAR(255),
        `content` VARCHAR(255),
        `store` VARCHAR(255),
        `targetMoney` INT,
        `status` INT
);