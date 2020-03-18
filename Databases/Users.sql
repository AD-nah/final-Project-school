DROP DATABASE finalProject;
CREATE DATABASE finalProject;
USE finalProject;


CREATE TABLE `Users` (
  `userId` varchar(255) PRIMARY KEY ,

  `firstName` varchar(255),
  `lastName` varchar(255),

  `email` varchar(255),
  `userPassword` varchar(255),

  `country` varchar(255),
  `city` varchar(255),
  `postCode` varchar(255),
  `userAddress` varchar(255),
  `phoneNumber` varchar(255),
  `birthDate` varchar(255),

  `createdAt` timestamp
);

------------------------------------------------------------ 
CREATE TABLE `Baskets` (
  `userId` int,
  `basketId` int
);

CREATE TABLE `Favorites` (
  `userId` int,
  `favoriteId` int
);

CREATE TABLE `Orders` (
  `userId` int,
  `orderId` int
);

ALTER TABLE `Baskets` ADD   FOREIGN KEY (`userId`) REFERENCES `Users` (`userId`);
ALTER TABLE `Favorites` ADD FOREIGN KEY (`userId`) REFERENCES `Users` (`userId`);
ALTER TABLE `Orders` ADD    FOREIGN KEY (`userId`) REFERENCES `Users` (`userId`);


-
------------------------------------------------------------ 
CREATE TABLE `Basket_Products` (
  `basketId` int,
  `productId` int
);

CREATE TABLE `Favorite_Products` (
  `favoriteId` int,
  `productId` int
);

CREATE TABLE `Orders_Products` (
  `orderId` int,
  `productId` int
);

ALTER TABLE `Basket_Products` ADD FOREIGN KEY (`basketId`) REFERENCES `Baskets` (`basketId`);
ALTER TABLE `Basket_Products` ADD FOREIGN KEY (`productId`) REFERENCES `Products` (`productId`);

ALTER TABLE `Favorite_Products` ADD FOREIGN KEY (`favoriteId`) REFERENCES `Favorites` (`favoriteId`);
ALTER TABLE `Favorite_Products` ADD FOREIGN KEY (`productId`) REFERENCES `Products` (`productId`);

ALTER TABLE `Orders_Products` ADD FOREIGN KEY (`orderId`) REFERENCES `Orders` (`orderId`);
ALTER TABLE `Orders_Products` ADD FOREIGN KEY (`productId`) REFERENCES `Products` (`productId`);


----------------------------------------------------------- 
CREATE TABLE `Products` (
  `productId` int,
  `productType` varchar(255),
  `productName` varchar(255),
  `productDescription` varchar(255)
);

CREATE TABLE `Images` (
  `productId` int,
  `Images` varchar(255)
);

CREATE TABLE `Sizes` (
  `productId` int,
  `Sizes` varchar(255)
);

CREATE TABLE `Prices` (
  `productId` int,
  `Prices` int
);

CREATE TABLE `Colors` (
  `productId` int,
  `Colors` varchar(255)
);

ALTER TABLE `Images` ADD FOREIGN KEY (`productId`) REFERENCES `Products` (`productId`);
ALTER TABLE `Sizes` ADD FOREIGN KEY (`productId`) REFERENCES `Products` (`productId`);
ALTER TABLE `Prices` ADD FOREIGN KEY (`productId`) REFERENCES `Products` (`productId`);
ALTER TABLE `Colors` ADD FOREIGN KEY (`productId`) REFERENCES `Products` (`productId`);


SHOW TABLES;






-- CREATE TABLE `Main_Products` (
--   `productId` int PRIMARY KEY AUTO_INCREMENT,
--   `productType` varchar(255),
--   `productName` varchar(255),
--   `productDescription` varchar(255)
-- );




-- INSERT INTO 
-- Users  (
--     userId,
--     firstName,
--     lastName,
--     email,
--     userPassword,
--     country,
--     city,
--     postCode,
--     userAddress,
--     phoneNumber,
--     birthDate
-- )
-- VALUES(
--     "RwFx0eW"
--     "ahmad",
--     "nah",
--     "email.com",
--     "adsadasfwef",
--     "germany",
--     "hamburg",
--     "32423",
--     "raja-ilin",
--     "3454352344343",
--     "2019-03-25"
-- );