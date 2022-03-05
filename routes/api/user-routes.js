const router = require("express").Router();
const { getAllUser } = require("../../controllers/user-controller");

// /api/users
router.route("/").get(getAllUser);
// .post(createPizza);

// /api/users/:id
// router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
