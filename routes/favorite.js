const express = require("express");
const router = express.Router();
const Favorite = require("../models/Favorite");

router.post("/get-favorite", async (req, res, next) => {
  const { userId } = req.body;

  const findInFavorite = await Favorite.findOne({ userId: userId });
  if (findInFavorite) {
    res.json({ favorite: findInFavorite.favorite });
  } else {
    res.status(404).json({ err: "favorite not found" });
  }
});

router.post("/save-to-favorite", async (req, res, next) => {
  const { userId, item } = req.body;

  let duplicated = false;
  let favorite = await Favorite.findOne({ userId: userId });
  if (favorite.favorite.length > 0) {
    favorite.favorite.forEach((product) => {
      if (item._id === product._id) {
        duplicated = true;
      }
    });
  }

  if (duplicated) {
    res.status(400).json({ message: "product is already in favorite!" });
  } else {
    Favorite.findOneAndUpdate({ userId: userId }, { $push: { favorite: item } })
      .then((response) => {
        res
          .status(200)
          .json({
            res: { products: response.favorite, message: "added to favorite" },
          });
      })
      .catch((error) => {
        res.status(400).send({ msg: error });
      });
  }
});

router.post("/remove-from-favorite", async (req, res, next) => {
  const { userId, item } = req.body;

  const removeingItem = await Favorite.update(
    { userId: userId },
    { $pull: { favorite: { _id: item._id } } }
  );
  if (removeingItem) {
    res.status(200).json({ message: "removed from favorite" });
  }
});

module.exports = router;
