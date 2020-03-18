CREATE TABLE `Main_Products` (
  `productId` int PRIMARY KEY AUTO_INCREMENT,
  `productType` varchar(255),
  `productName` varchar(255),
  `productDescription` varchar(255),
  `productRating` int
);

CREATE TABLE `Product_Images` (
  `productId` int,
  `images` varchar(255),
  `productType` varchar(255)
);

CREATE TABLE `Product_Sizes` (
  `productId` int,
  `sizes` varchar(255),
  `productType` varchar(255)
);

CREATE TABLE `Product_Prices` (
  `productId` int,
  `prices` int,
  `productType` varchar(255)
);

CREATE TABLE `Product_Colors` (
  `productId` int,
  `colors` varchar(255),
  `productType` varchar(255)
);

ALTER TABLE `Product_Images` ADD FOREIGN KEY (`productId`) REFERENCES `Main_Products` (`productId`);
ALTER TABLE `Product_Images` ADD FOREIGN KEY (`productType`) REFERENCES `Main_Products` (`productType`);

ALTER TABLE `Product_Sizes` ADD FOREIGN KEY (`productId`) REFERENCES `Main_Products` (`productId`);
ALTER TABLE `Product_Sizes` ADD FOREIGN KEY (`productType`) REFERENCES `Main_Products` (`productType`);

ALTER TABLE `Product_Prices` ADD FOREIGN KEY (`productId`) REFERENCES `Main_Products` (`productId`);
ALTER TABLE `Product_Prices` ADD FOREIGN KEY (`productType`) REFERENCES `Main_Products` (`productType`);

ALTER TABLE `Product_Colors` ADD FOREIGN KEY (`productId`) REFERENCES `Main_Products` (`productId`);
ALTER TABLE `Product_Colors` ADD FOREIGN KEY (`productType`) REFERENCES `Main_Products` (`productType`);

