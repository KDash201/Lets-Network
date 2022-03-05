const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const UserSchema = new Schema(
  {
    username: {
      type: String,
      // unique: true,
      // required: "Username is required",
      // trim: true,
    },
    email: {
      type: String,
      // required: "Email address is required",
      // unique: true,
      // trim: true,
      // // validate: [validateEmail, "Please fill a valid email address"],
      // match: [
      //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      //   "Please fill a valid email address",
      // ],
    },
    // createdBy: {
    //   type: String,
    //   // required: true,
    //   trim: true,
    // },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thoughts",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false,
  }
);

// count of thoughts
UserSchema.virtual("friendsCount").get(function () {
  return this.friends.reduce((total, friends) => total + friends.length + 1, 0);
});

// create the User model using the UserSchema
const User = model("User", UserSchema);

// export the User model
module.exports = User;
