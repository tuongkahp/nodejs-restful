const constResCode = require("../../constants/constResCode");
const db = require("../../models");
const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcryptjs");
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
          phoneNumber: user.phoneNumber ?? '',
          address: user.address ?? '',
          avatarUrl: user.avatarUrl ?? 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'
        }
      });
    });
};

exports.changePass = (req, res) => {
  if (req.body.newPassword == req.body.oldPassword) {
    return res.send({ code: constResCode.FAILURE, message: 'New password is equal with old password' });
  }

  User.findById(req.userId)
    .exec((err, user) => {
      if (err || !user) {
        return res.send({ code: constResCode.FAILURE, message: err ?? 'User not found' });;
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.oldPassword,
        user.password
      );

      if (!passwordIsValid) {
        return res.send({
          code: constResCode.WRONG_PASSWORD,
          message: "Invalid password"
        });
      }

      user.password = bcrypt.hashSync(req.body.newPassword ?? uuidv4(), 8)

      user.save(async (err, user) => {
        if (err) {
          res.send({
            code: constResCode.FAILURE,
            message: err
          });
        }

        res.send({ code: constResCode.SUCCESS, message: "Success" });
      })
    });
};

exports.updateUserInfo = (req, res) => {
  User.findById(req.userId)
    .exec((err, user) => {
      if (err || !user) {
        return res.send({ code: constResCode.FAILURE, message: err ?? 'User not found' });;
      }

      user.fullName = req.body.fullName
      user.phoneNumber = req.body.phoneNumber
      user.address = req.body.address

      user.save(async (err, user) => {
        if (err) {
          res.send({
            code: constResCode.FAILURE,
            message: err
          });
        }

        res.send({ code: constResCode.SUCCESS, message: "Success" });
      })
    });
};

exports.uploadFile = (req, res) => {
  console.log(req.file);
  if (!req.file) {
    res.status(500);
    return next(err);
  }
  res.json({ fileUrl: 'http:localhost:3005/images/' + req.file.filename });
}