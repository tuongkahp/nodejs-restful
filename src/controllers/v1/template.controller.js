const config = require("../../configs/auth.config");
const constResCode = require("../../constants/constResCode");
const authBussiness = require("../../business/auth.business");
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

const db = require("../../models");
const User = db.user;
const Role = db.role;
const Template = db.template;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const moment = require("moment");

exports.getTemplate = async (req, res) => {
  const pageLength = 6
  let page = req.query?.page || 1
  page = page < 1 ? 1 : page
  let code = constResCode.FAILURE
  let lstTemplates = null
  let total = null

  try {
    lstTemplates = await Template.find({}).sort({ '_id': 1 }).skip((page - 1) * pageLength).limit(pageLength)
    total = await Template.find({}).count()
  }
  catch (err) {
    console.log(err)
    res.send({ code })
  }

  res.send({
    code: constResCode.SUCCESS,
    lstTemplates,
    total
  })
};