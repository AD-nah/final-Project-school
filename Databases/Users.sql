

 
-- CREATE TABLE Baskets (
--   userId int,
--   basketId int
-- );

-- CREATE TABLE Favorites (
--   userId int,
--   favoriteId int
-- );

-- CREATE TABLE Orders (
--   userId int,
--   orderId int
-- );

-- ALTER TABLE Baskets ADD   FOREIGN KEY (userId) REFERENCES Users (userId);
-- ALTER TABLE Favorites ADD FOREIGN KEY (userId) REFERENCES Users (userId);
-- ALTER TABLE Orders ADD    FOREIGN KEY (userId) REFERENCES Users (userId);




 
-- CREATE TABLE Basket_Products (
--   basketId int,
--   productId int
-- );

-- CREATE TABLE Favorite_Products (
--   favoriteId int,
--   productId int
-- );

-- CREATE TABLE Orders_Products (
--   orderId int,
--   productId int
-- );

-- ALTER TABLE Basket_Products ADD FOREIGN KEY (basketId) REFERENCES Baskets (basketId);
-- ALTER TABLE Basket_Products ADD FOREIGN KEY (productId) REFERENCES Products (productId);

-- ALTER TABLE Favorite_Products ADD FOREIGN KEY (favoriteId) REFERENCES Favorites (favoriteId);
-- ALTER TABLE Favorite_Products ADD FOREIGN KEY (productId) REFERENCES Products (productId);

-- ALTER TABLE Orders_Products ADD FOREIGN KEY (orderId) REFERENCES Orders (orderId);
-- ALTER TABLE Orders_Products ADD FOREIGN KEY (productId) REFERENCES Products (productId);



 
-- CREATE TABLE Products (
--   productId int,
--   productType varchar(255),
--   productName varchar(255),
--   productDescription varchar(255)
-- );






CREATE TABLE users (
  userId varchar(255) PRIMARY KEY ,

  firstName varchar(255),
  lastName varchar(255),

  email varchar(255),
  userPassword varchar(255),

  country varchar(255),
  city varchar(255),
  postCode varchar(255),
  userAddress varchar(255),
  phoneNumber varchar(255),
  birthDate varchar(255),

  createdAt timestamp
);

INSERT INTO users (userId, firstName, lastName, email, userPassword, country, city, postCode, userAddress, phoneNumber, birthDate, createdAt) VALUES
('pzUb0WL', 'ahmad', 'nahlawi', 'x.alnahlawi@icloud.com', '$2a$10$I3eRkaNJVI6B2hWy2wRVHe1eCjiWIAJnUismIyTJOBMm2xOxSYIWq', 'Germany', 'Hamburg', '22045', 'raja-Ilinauk-Strasse 33', '+4914838449375', '2019-03-25', '2020-03-19 14:35:52'),
('ZOXoRW1', 'ahmad', 'nahlawi', 'ahmad.alnahlawi@icloud.com', '$2a$10$aEs60b5MIckcNwLTXjXjwutLFwSO26YvGOedsIiKL2kKAh/MOjnwe', 'Germany', 'Hamburg', '22045', 'raja-Ilinauk-Strasse 33', '+4914838449375', '2019-03-25', '2020-03-19 14:04:39');




CREATE TABLE main_products (
  productId int PRIMARY KEY AUTO_INCREMENT,
  productType varchar(255),
  productName varchar(255),
  productDescription varchar(255)
);


INSERT INTO main_products (productType, productName, productDescription, productRating) VALUES
('male', 'SHEIN Männer Hose Mit Schrägen Taschen Und Karo Muster', 'Taillenumfang : 92 cm,  Hüftenumfang : 108 cm,  Länge : 99.5 cm,  Schenkelumfang : 66.5 cm.', 3),
('male', 'SHEIN Männer Blazer Mit Eingekerbtem Kragen Und Knöpfen Vorn', 'Taillenumfang : 92 cm,  Hüftenumfang : 108 cm,  Länge : 99.5 cm,  Schenkelumfang : 66.5 cm.', 5),
('male', 'Männer Hemd Mit Pflanzen Muster', 'Schulterbreite : 46.8 cm,  Brust : 112 cm,  Länge : 74 cm,  Ärmellänge : 22.6 cm,  Bizepslänge : 43.6 cm,  Ärmelaufschlag : 39.4 cm.', 2),
('male', 'Männer Bomber Jacke mit Reißverschluss und Taschen Detail', 'Taillenumfang : 92 cm,  Hüftenumfang : 108 cm,', 5),
('male', 'Männer Sweatshirt  mit Kordelzug', 'Druckknöpfen Klassischer Kragen', 2),
('male', 'Männer Jacke mit Buchstaben Grafik', 'mit Druckknöpfen Klassischer Kragen, lange Ärmel.', 4),
('male', 'GIVENCHY', 'Jeanshemd mit Druckknöpfen Klassischer Kragen, lange Ärmel. Hergestellt in: Italien', 4),
('male', 'THOM BROWNE', 'Gerippte Jacke Gerippte Jacke aus Wolle von Thom Browne. Merkmale: gerader Schnitt, Reißverschluss an der Vorderseite, gerippter Kragen, gerippte Abschlüsse, seitliche Taschen und Futter.', 1),
('male', 'Männer Hosen mit Tasche', 'mit Reißverschluss und Taschen Detail', 1),
('male', 'Männer Sweatshirt mit Kordelzug', 'Bizepslänge : 43.6 cm,  Ärmelaufschlag : 39.4 cm.', 5),
('female', 'Boxystyle Strickpullover', 'Wolle von  Merkmale: gerader Schnitt, Reißverschluss an der Vorderseite, gerippter Kragen, gerippte Abschlüsse, seitliche Taschen und Futter.', 3),
('female', 'MessBebe Women\s Oversized Knitted Jumper', 'Glittering: MessBebe long-sleeved, crew neck jumper in a glitter look, designed with deep shoulder seams, ribbed details and a straight hem.', 2),
('female', 'Onlcaviar L/S KNT Women\s Pullover', 'Product description Only fashionable knitted jumper with crew neck, raglan sleeves and rounded hem; material: 100% polyacrylic.', 2),
('female', 'Onlmila Lacy L/S KNT Noos Pullover', 'entspanntes Outfit, dass immer passt, braucht nicht viel. Mit diesem schlichten Strickpullover von ONLY lassen sich im Handumdrehen unzählige tolle Outfits kreieren. Zu einer Jeans, einem süßen oder coolen Rock ', 2),
('female', 'Only Women\s Onlsaga Faux Leather Jacket CC OTW Jacket', 'Hingucker. Die super lässige Kunstlederjacke von ONLY ist genau das Richtige für jeden Anlass. Die trendige Jacke in Wildlederoptik überzeugt durch coole Ziernähte und Metallic-Reißverschlüsse an den Ärmeln. ', 3),
('female', 'Onlmila Lacy L/S KNT Noos Pullover', 'Only long cardigan made of soft knit with loose, comfortable fit; 2 side pockets; length: 77 cm (size M); material: 100 % polyacrylic.', 4),
('female', 'The North Face Quest Women\s Thermal Jacket', 'perfect companion for the spring and summer. The cotton outer fabric is sporty, the minimalist design with large hood adds a feminine touch.', 4),
('female', 'Only Onlmandy Sedona Women\s Spring Jacket OTW', 'Only Women\s Cropped Coat. This short coat is the perfect companion for the spring and summer. The cotton outer fabric is sporty, the minimalist design with large hood adds a feminine touch.', 5);


CREATE TABLE product_images (
  productId int,
  images varchar(255),
  productType varchar(255)
);

ALTER TABLE product_images ADD FOREIGN KEY (productId) REFERENCES main_products (productId);
ALTER TABLE product_images ADD FOREIGN KEY (productType) REFERENCES main_products (productType);


INSERT INTO product_images (productId, images, productType) VALUES
(5, 'https://img.ltwebstatic.com/images2_pi/2019/05/17/15580895952502937241_thumbnail_600x799.webp', 'male'),
(1, 'https://img.ltwebstatic.com/images3_pi/2019/11/21/157432915526ccd09cec2d66d3d20bec52cfe42776_thumbnail_600x.webp', 'male'),
(4, 'https://img.ltwebstatic.com/images3_pi/2019/12/10/1575960960ef91e15deb9ce2e093f1b1e1da2d911a_thumbnail_600x.webp', 'male'),
(3, 'https://img.ltwebstatic.com/images2_pi/2019/04/17/15554803652929144599_thumbnail_600x799.webp', 'male'),
(4, 'https://img.ltwebstatic.com/images3_pi/2019/12/10/1575960957b5db496f0f340045d270716aaf7683a3_thumbnail_600x.webp', 'male'),
(2, 'https://img.ltwebstatic.com/images3_pi/2019/12/21/1576896097388ac99bca6a46bcf257b3b146259f72_thumbnail_600x.webp', 'male'),
(3, 'https://img.ltwebstatic.com/images2_pi/2019/04/17/155548036891307857_thumbnail_600x799.webp', 'male'),
(1, 'https://img.ltwebstatic.com/images3_pi/2019/11/21/15743291481861493d411c0c16af2c16f3ae421203_thumbnail_600x.webp', 'male'),
(3, 'http://img.ltwebstatic.com/images2_pi/2019/06/18/15608496751022284329_thumbnail_600x799.webp', 'male'),
(2, 'https://img.ltwebstatic.com/images3_pi/2019/12/21/1576896101b546fe296abd1f9ee02e5b8dd81d4cf2_thumbnail_600x.webp', 'male'),
(5, 'https://img.ltwebstatic.com/images2_pi/2019/05/17/15580895931119593356_thumbnail_600x799.webp', 'male'),
(6, 'https://img.ltwebstatic.com/images2_pi/2018/10/08/15389841082733405005_thumbnail_600x799.webp', 'male'),
(6, 'https://img.ltwebstatic.com/images2_pi/2018/10/08/15389841092710265147_thumbnail_600x799.webp', 'male'),
(7, 'https://img.ltwebstatic.com/images2_pi/2018/10/08/15389841082733405005_thumbnail_600x799.webp', 'male'),
(8, 'https://img.ltwebstatic.com/images3_pi/2019/10/29/1572330744fd2b89fa0648bfcc3aae0c052572b347_thumbnail_600x.webp', 'male'),
(8, 'https://img.ltwebstatic.com/images3_pi/2019/10/29/157233073891feb17c799101f221ead42c0327572f_thumbnail_600x.webp', 'male'),
(9, 'https://cdn-images.farfetch-contents.com/15/13/29/22/15132922_26085012_1000.jpg', 'male'),
(9, 'https://cdn-images.farfetch-contents.com/15/13/29/22/15132922_26084999_1000.jpg', 'male'),
(8, 'https://img.ltwebstatic.com/images3_pi/2019/11/14/1573720789af0882a479798b01703266dad38d71af_thumbnail_600x.webp', 'male'),
(9, 'https://cdn-images.farfetch-contents.com/15/13/29/22/15132922_26085004_1000.jpg', 'male'),
(7, 'https://img.ltwebstatic.com/images2_pi/2018/10/08/15389841092710265147_thumbnail_600x799.webp', 'male'),
(10, 'https://cdn-images.farfetch-contents.com/13/00/92/09/13009209_13770630_1000.jpg', 'male'),
(10, 'https://cdn-images.farfetch-contents.com/13/00/92/09/13009209_13770636_1000.jpg', 'male'),
(10, 'https://cdn-images.farfetch-contents.com/13/00/92/09/13009209_13770645_1000.jpg', 'male'),
(11, 'https://www.ilovetall.com/media/image/ac/e7/48/I-LOVE-TALL-Boxystyle-Strickpullover-extra-lang-schwarz.jpg', 'female'),
(11, 'https://www.ilovetall.com/media/image/e2/70/2c/I-LOVE-TALL-Feinstrickpullover-gerippt-in-Langgro-sse-marine.jpg', 'female'),
(11, 'https://www.ilovetall.com/media/image/f0/34/1f/ilt_0168.jpg', 'female'),
(12, 'https://images-na.ssl-images-amazon.com/images/I/81QLduEzYKL._AC_SY879._SX._UX._SY._UY_.jpg', 'female'),
(12, 'https://images-na.ssl-images-amazon.com/images/I/81Ae28wcyJL._AC_SY879._SX._UX._SY._UY_.jpg', 'female'),
(12, 'https://images-na.ssl-images-amazon.com/images/I/81GnYenn8pL._AC_UY879_.jpg', 'female'),
(13, 'https://images-na.ssl-images-amazon.com/images/I/A1RzMuQUL1L._AC_SX466._SX._UX._SY._UY_.jpg', 'female'),
(13, 'https://images-na.ssl-images-amazon.com/images/I/91F-%2BYqmv%2BL._AC_SY606._SX._UX._SY._UY_.jpg', 'female'),
(13, 'https://images-na.ssl-images-amazon.com/images/I/91-5IZG8CzL._AC_UX466_.jpg', 'female'),
(13, 'https://images-na.ssl-images-amazon.com/images/I/81EjND44PHL._AC_SX466._SX._UX._SY._UY_.jpg', 'female'),
(14, 'https://images-na.ssl-images-amazon.com/images/I/813yIqF1wmL._AC_UX466_.jpg', 'female'),
(14, 'https://images-na.ssl-images-amazon.com/images/I/81m8x-19LuL._AC_SX466._SX._UX._SY._UY_.jpg', 'female'),
(14, 'https://images-na.ssl-images-amazon.com/images/I/81oDlGyaGOL._AC_SX466._SX._UX._SY._UY_.jpg', 'female'),
(14, 'https://images-na.ssl-images-amazon.com/images/I/81884ZRtz7L._AC_UX466_.jpg', 'female'),
(15, 'https://images-na.ssl-images-amazon.com/images/I/81lo%2BCpTzOL._AC_SX466._SX._UX._SY._UY_.jpg', 'female'),
(15, 'https://images-na.ssl-images-amazon.com/images/I/91AUkKEowJL._AC_UX466_.jpg', 'female'),
(15, 'https://images-na.ssl-images-amazon.com/images/I/81MW023wyfL._AC_SX466._SX._UX._SY._UY_.jpg', 'female'),
(16, 'https://images-na.ssl-images-amazon.com/images/I/81rnSyU0BsL._AC_UY879_.jpg', 'female'),
(16, 'https://images-na.ssl-images-amazon.com/images/I/6141grKnhvL._AC_UY879_.jpg', 'female'),
(17, 'https://images-na.ssl-images-amazon.com/images/I/8112RZuCmbL._AC_SY879_.jpg', 'female'),
(16, 'https://images-na.ssl-images-amazon.com/images/I/81s3BjWnnPL._AC_UY879_.jpg', 'female'),
(17, 'https://images-na.ssl-images-amazon.com/images/I/81AIisJC3uL._AC_UY879_.jpg', 'female'),
(18, 'https://images-na.ssl-images-amazon.com/images/I/81VL4zX3OOL._AC_UY879_.jpg', 'female'),
(18, 'https://images-na.ssl-images-amazon.com/images/I/61q3sEeo1bL._AC_UX679_.jpg', 'female'),
(17, 'https://images-na.ssl-images-amazon.com/images/I/816DHEMXfUL._AC_SY879._SX._UX._SY._UY_.jpg', 'female'),
(18, 'https://images-na.ssl-images-amazon.com/images/I/81vmDXmLQ8L._AC_UY879_.jpg', 'female');




CREATE TABLE product_prices (
  productId int,
  prices int,
  productType varchar(255)
);
ALTER TABLE product_prices ADD FOREIGN KEY (productId) REFERENCES main_products (productId);
ALTER TABLE product_prices ADD FOREIGN KEY (productType) REFERENCES main_products (productType);


INSERT INTO product_prices (productId, prices, productType) VALUES
(1, 17, 'male'),
(1, 10, 'male'),
(2, 19, 'male'),
(2, 8, 'male'),
(3, 15, 'male'),
(3, 20, 'male'),
(4, 34, 'male'),
(5, 25, 'male'),
(5, 13, 'male'),
(4, 17, 'male'),
(6, 55, 'male'),
(6, 13, 'male'),
(7, 55, 'male'),
(7, 13, 'male'),
(8, 40, 'male'),
(8, 22, 'male'),
(9, 690, 'male'),
(9, 120, 'male'),
(10, 25, 'male'),
(11, 34, 'female'),
(11, 15, 'female'),
(12, 15, 'female'),
(12, 6, 'female'),
(13, 17, 'female'),
(14, 15, 'female'),
(14, 21, 'female'),
(13, 10, 'female'),
(15, 22, 'female'),
(15, 39, 'female'),
(16, 23, 'female'),
(17, 122, 'female'),
(18, 59, 'female'),
(18, 99, 'female'),
(16, 14, 'female'),
(17, 70, 'female'),
(10, 25, 'male');





-- CREATE TABLE product_Sizes (
--   productId int,
--   sizes varchar(255),
--   productType varchar(255)
-- );

-- CREATE TABLE product_Colors (
--   productId int,
--   colors varchar(255),
--   productType varchar(255)
-- );

-- ALTER TABLE product_Sizes ADD FOREIGN KEY (productId) REFERENCES main_products (productId);
-- ALTER TABLE product_Sizes ADD FOREIGN KEY (productType) REFERENCES main_products (productType);

-- ALTER TABLE product_Colors ADD FOREIGN KEY (productId) REFERENCES main_products (productId);
-- ALTER TABLE product_Colors ADD FOREIGN KEY (productType) REFERENCES main_products (productType);


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
