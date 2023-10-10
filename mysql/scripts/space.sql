DROP DATABASE IF EXISTS spacedb;

CREATE DATABASE spacedb;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

USE spacedb;

CREATE TABLE `space` (
        `id` INT AUTO_INCREMENT PRIMARY KEY,
        `userName` VARCHAR(20) NOT NULL DEFAULT "noUserName",
        `title` VARCHAR(20) NOT NULL DEFAULT "noTitle",
        `tag1` VARCHAR(20) NOT NULL DEFAULT "noTag1",
        `tag2` VARCHAR(20) NOT NULL DEFAULT "noTag2",
        `tag3` VARCHAR(20) NOT NULL DEFAULT "noTag3",
        `price` INT(3) NOT NULL DEFAULT 0,
        `isPeriodic` TINYINT(1) NOT NULL DEFAULT "0",
        `date` VARCHAR(11) NOT NULL DEFAULT "0000-00-00",
        `days` INT(7) NOT NULL DEFAULT 0,
        `startTime` INT(4) NOT NULL DEFAULT 0,
        `endTime` INT(4) NOT NULL DEFAULT 0,
        `status` TINYINT(1) NOT NULL DEFAULT 0);

INSERT INTO space (userName, title, tag1, tag2, tag3, price, isPeriodic, date, days, startTime, endTime, status) VALUES
    ("최윤석", "스타벅스", "카페", "개인공간", "낮에만사용", 1234, 1, "0000-00-00",67, 1800, 2400, 1 ),
    ("고양이", "탐앤탐스 율전점", "음식점", "브런치", "휴식", 2222, 1, "0000-00-00",60, 1500, 2100, 0 ),
    ("조승현", "투썸플레이스", "커피샵", "카페", "음식점", 2345, 0, "2023-10-20", 0, 1730, 2230, 1 );