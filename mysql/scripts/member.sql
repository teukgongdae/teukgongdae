DROP DATABASE IF EXISTS memberdb;

CREATE DATABASE memberdb;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

USE memberdb;

CREATE TABLE `member` (
        `id` INT AUTO_INCREMENT PRIMARY KEY,
        `age` INT NOT NULL DEFAULT 0);

INSERT INTO member (age) VALUES
    (26),
    (50),
    (99);