const promise = require("bluebird");
require("dotenv").config();

const options = {
  // Initialization Options
  promiseLib: promise
};

const pgp = require("pg-promise")(options);

const connectionString = `postgres://${process.env.MYLOGIN}:${
  process.env.MYPASS
}@localhost:5432/recipes_db`;
// const connectionString = `postgres://${process.env.MYHEROKULOGIN}:${
//   process.env.MYHEROKUPASS
// }@ec2-54-227-243-210.compute-1.amazonaws.com:5432/d9bsd10dnsd0aj`;
const db = pgp(connectionString);

// add query functions

function readRecipes(req, res, next) {
  db.any("select * from recipes")
    .then(data => {
      res.status(200).json({
        status: "success",
        data,
        message: "Retrieved all recipes"
      });
    })
    .catch(err => next(err));
}

function createRecipe(req, res, next) {
  db.none(
    "insert into recipes(title, style, ingredients, process) values($1, $2, $3, $4)",
    [req.body.title, req.body.style, req.body.ingredients, req.body.process]
  )
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Inserted one recipe"
      });
    })
    .catch(err => next(err));
}

function updateRecipe(req, res, next) {
  db.none(
    "update recipes set title=$1, style=$2, ingredients=$3, process=$4 where id=$5",
    [
      req.body.title,
      req.body.style,
      req.body.ingredients,
      req.body.process,
      req.params.id
    ]
  )
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Updated recipe"
      });
    })
    .catch(err => next(err));
}

function deleteRecipe(req, res, next) {
  const recipeID = req.params.id;
  db.result("delete from recipes where id = $1", recipeID)
    .then(result => {
      res.status(200).json({
        status: "success",
        message: `Deleted ${result.rowCount} recipe`
      });
    })
    .catch(err => next(err));
}

module.exports = {
  readRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe
};
