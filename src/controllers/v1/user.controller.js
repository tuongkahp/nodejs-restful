const constResCode = require("../../constants/constResCode");
const db = require("../../models");
const User = db.user;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.getUserInfo = (req, res) => {
  User.findById(req.userId)
    .exec((err, user) => {
      if (err) {
        res.send({ code: constResCode.FAILURE, message: err });
        return;
      }

      if (!user) {
        res.send({ code: constResCode.FAILURE, message: "User is not exist" });
        return;
      }

      console.log('user', user)

      res.send({
        code: constResCode.SUCCESS, message: "Success", data: {
          email: user.email,
          fullName: user.fullName,
          phoneNumber: user.phoneNumber
        }
      });
    });
};

exports.changePass = (req, res) => {
  User.findById(req.userId)
    .exec((err, user) => {
      if (err) {
        res.send({ code: constResCode.FAILURE, message: err });
        return;
      }

      if (!user) {
        res.send({ code: constResCode.FAILURE, message: "User is not exist" });
        return;
      }

      res.send({ code: constResCode.SUCCESS, message: "Success", userInfo: user });

      res.status(200).send("Moderator Content.");
    });
};
