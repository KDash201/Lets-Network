const { User } = require("../models");

const userController = {
  // get all users
  getAllUser(req, res) {
    User.find({})
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  //   getUserById({ params }, res) {
  //     User.findOne({ _id: params.id })
  //       .populate({
  //         path: "friend",
  //         select: "-__v",
  //       })
  //       .select("-__v")
  //       .then((dbUserData) => {
  //         if (!dbUserData) {
  //           res.status(404).json({ message: "No user found with this id!" });
  //           return;
  //         }
  //         res.json(dbUserData);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         res.status(400).json(err);
  //       });
  //   },
};

module.exports = userController;
