const router = require("express").Router();
const {
  addThought,
  getThoughtById,
  getAllThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thought-controller");

// /api/thoughts/<userId>
router.route("/:userId").post(addThought);

//  /api/thoughts
router.route("/").get(getAllThought);

// /api/thoughts/<thoughtId>
router
  .route("/:thoughtId")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
