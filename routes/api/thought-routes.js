const router = require("express").Router();
const {
  addThought,
  getThoughtById,
} = require("../../controllers/thought-controller");

// /api/thoughts/<userId>
router.route("/:userId").post(addThought);

// /api/thoughts/<thoughtId>
router.route("/:thoughtId").get(getThoughtById);

module.exports = router;
