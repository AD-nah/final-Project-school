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




-- https://stackoverflow.com/questions/7595826/sql-server-table-result-to-array-in-sql-server-2005

CREATE TABLE P (ID INT PRIMARY KEY, Description VARCHAR(20));
CREATE TABLE C (ID INT PRIMARY KEY, PID INT, 
    Description VARCHAR(20), 
    CONSTRAINT fk FOREIGN KEY (PID) REFERENCES P(ID));

-- ----------------------------------------------------
    INSERT INTO P VALUES (36, 'Blah Blah');
INSERT INTO P VALUES (20, 'Pah Pah');

INSERT INTO C VALUES (1, 36, 'Bob');
INSERT INTO C VALUES (2, 36, 'Gary');
INSERT INTO C VALUES (3, 36, 'Reginald');
INSERT INTO C VALUES (4, 20, 'Emily');
INSERT INTO C VALUES (5, 20, 'Dave');
-- ----------------------------------------------------

WITH
FirstItems (PID, FirstCID) AS (    

    SELECT C.PID, MIN(C.ID)
      FROM C
     GROUP BY C.PID      
),  
SubItemList (PID, CID, ItemNum) AS (

    SELECT C.PID, C.ID, 1
      FROM C JOIN FirstItems FI ON (C.ID = FI.FirstCID)
    UNION ALL
    SELECT C.PID, C.ID, IL.ItemNum + 1
      FROM C JOIN SubItemList IL ON C.PID = IL.PID AND C.ID > CID
),
ItemList (PID, CID, ItemNum) AS (

    SELECT PID, CID, MAX(ItemNum)
      FROM SubItemList
     GROUP BY PID, CID
),
SubArrayList (PID, CID, Array, ItemNum) AS (

    SELECT IL.PID, IL.CID, CAST(C.Description AS VARCHAR(MAX)), IL.ItemNum
      FROM ItemList IL JOIN C ON IL.CID = C.ID
     WHERE IL.ItemNum = 1
    UNION ALL
    SELECT IL.PID, IL.CID, AL.Array + ',' + CAST(C.Description AS VARCHAR(MAX)), IL.ItemNum
      FROM ItemList IL
      JOIN SubArrayList AL ON (IL.PID = AL.PID AND IL.ItemNum = AL.ItemNum + 1)
      JOIN C ON (IL.CID = C.ID)
),
MaxItems (PID, MaxItem) AS (

    SELECT PID, MAX(ItemNum)
      FROM SubItemList
     GROUP BY PID

),
ArrayList (PID, List) AS (

    SELECT SAL.PID, SAL.Array
      FROM SubArrayList SAL 
      JOIN MaxItems MI ON (SAL.PID = MI.PID AND SAL.ItemNum = MI.MaxItem)

)
SELECT P.ID, P.Description, AL.List
  FROM ArrayList AL JOIN P ON P.ID = AL.PID
 ORDER BY P.ID










-- ---------------------------------------------------
