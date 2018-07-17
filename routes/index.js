const express = require("express");

const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Stash your mash!" });
});

module.exports = router;
