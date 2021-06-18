const config = require("../../configs/auth.config");
const constResCode = require("../../constants/constResCode");
const authBussiness = require("../../business/auth.business");
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

const db = require("../../models");
const User = db.user;
const Role = db.role;
const Template = db.template;

exports.get = async (req, res) => {
  const pageLength = 6
  let page = req.query?.page || 1
  page = page < 1 ? 1 : page
  let responseCode = constResCode.FAILURE
  let lstTemplates = null
  let total = null

  try {
    lstTemplates = await Template.find({}).sort({ '_id': 1 }).skip((page - 1) * pageLength).limit(pageLength)
    total = await Template.find({}).count()
  }
  catch (err) {
    console.log(err)
    res.send({ responseCode })
  }

  res.send({
    responseCode: constResCode.SUCCESS,
    lstTemplates,
    total
  })
};

exports.add = async (req, res) => {
  const pageLength = 6
  let page = req.query?.page || 1
  page = page < 1 ? 1 : page
  let responseCode = constResCode.FAILURE
  let lstTemplates = null
  let total = null

  try {
    lstTemplates = await Template.find({}).sort({ '_id': 1 }).skip((page - 1) * pageLength).limit(pageLength)
    total = await Template.find({}).count()
  }
  catch (err) {
    console.log(err)
    res.send({ responseCode })
  }

  res.send({
    responseCode: constResCode.SUCCESS,
    lstTemplates,
    total
  })
};

exports.update = async (req, res) => {
  const pageLength = 6
  let page = req.query?.page || 1
  page = page < 1 ? 1 : page
  let responseCode = constResCode.FAILURE
  let lstTemplates = null
  let total = null

  try {
    lstTemplates = await Template.find({}).sort({ '_id': 1 }).skip((page - 1) * pageLength).limit(pageLength)
    total = await Template.find({}).count()
  }
  catch (err) {
    console.log(err)
    res.send({ responseCode })
  }

  res.send({
    responseCode: constResCode.SUCCESS,
    lstTemplates,
    total
  })
};