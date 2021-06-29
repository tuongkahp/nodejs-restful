const config = require("../../configs/auth.config");
const constResCode = require("../../constants/constResCode");
const authBussiness = require("../../business/auth.business");
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

const db = require("../../models");
const User = db.user;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const moment = require("moment");

exports.register = async (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
    fullName: req.body.fullName,
    phoneNumber: req.body.phoneNumber,
    avatarUrl: req.body.avatarUrl
  };

  const roles = req.body.roles;
  const result = await authBussiness.register(user, roles);
  res.send(result);
};

exports.login = (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.send({ code: constResCode.FAILURE, message: err });
        return;
      }

      if (!user) {
        return res.send({ code: constResCode.FAILURE, message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.send({
          code: constResCode.WRONG_PASSWORD,
          accessToken: null,
          message: "Invalid password"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      }

      res.send({
        code: constResCode.SUCCESS,
        message: "Login successfully",
        id: user._id,
        username: user.username,
        email: user.email,
        roles: authorities,
        accessToken: token,
        expiredTime: moment().add(7, 'days'),
        refreshToken: ''
      });
    });
};

exports.loginGoogle = async (req, res) => {
  const { tokenId } = req.body;

  const ticket = await client.verifyIdToken({
    idToken: tokenId,
    audience: process.env.GOOGLE_CLIENT_ID
  });

  const { name, email, picture } = ticket.getPayload();

  console.log('gg info: ', { name, email, picture });

  if (!ticket) {
    res.send({ code: constResCode.FAILURE, message: 'Cannot get google info' });
  }

  User.findOne({
    email: email
  })
    .populate("roles", "-__v")
    .exec(async (err, user) => {
      if (err) {
        res.send({ code: constResCode.FAILURE, message: err });
        return;
      }

      if (!user) {
        // register
        user = {
          email: email,
          fullName: name,
          phoneNumber: '',
          avatarUrl: picture
        };

        const result = await authBussiness.register(user, null);

        if (result.code !== constResCode.SUCCESS) {
          res.send({ code: constResCode.FAILURE, message: 'Cannot register this account' });
          return;
        }

        user = result.data;

        console.log('user info', user);
      }

      // var passwordIsValid = bcrypt.compareSync(
      //   user.password,
      //   user.password
      // );

      // if (!passwordIsValid) {
      //   return res.send({
      //     code: constResCode.FAILURE,
      //     accessToken: null,
      //     message: "Invalid Password!"
      //   });
      // }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      }

      res.send({
        code: constResCode.SUCCESS,
        message: "Login successfully",
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        avatarUrl: user.avatarUrl,
        roles: authorities,
        accessToken: token,
        expiredTime: moment().add(7, 'days'),
        refreshToken: "123456"
      });
    });
};
