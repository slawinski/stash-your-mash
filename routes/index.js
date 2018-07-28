const express = require("express");

const router = express.Router();

const db = require("../queries");

router.post("/recipes", db.createRecipe);
router.get("/recipes", db.readRecipes);
router.get("/recipes/:id", db.readOneRecipe);
router.put("/recipes/:id", db.updateRecipe);
router.delete("/recipes/:id", db.deleteRecipe);

router.get("/new", (req, res) => {
  res.render("new");
});

router.get("/recipes/:id/edit", (req, res) => {
  res.render("edit");
});

module.exports = router;
