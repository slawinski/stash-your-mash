const express = require("express");

const router = express.Router();

const db = require("../queries");

router.post("/recipes", db.createRecipe);
router.get("/recipes", db.readRecipes);
router.put("/recipes/:id", db.updateRecipe);
router.delete("/recipes/:id", db.deleteRecipe);

module.exports = router;
