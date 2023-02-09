const config = require("../../configs/auth.config");
const constResCode = require("../../constants/constResCode");
const authBussiness = require("../../business/auth.business");
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

const db = require("../../models");
const mockCategoryData = require("../../../mockCategoryData");

exports.get = async (req, res) => {
  res.send({
    code: constResCode.SUCCESS,
    lstCategories: mockCategoryData
  })
};