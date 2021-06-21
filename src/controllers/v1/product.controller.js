const config = require("../../configs/auth.config");
const constResCode = require("../../constants/constResCode");
const authBussiness = require("../../business/auth.business");
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

const db = require("../../models");
const mockProductData = require("../../../mockProductData");
const Product = db.template;

exports.get = async (req, res) => {
  let responseCode = constResCode.FAILURE
  let lstProducts = null
  let total = null

  const page = parseInt(req.query?.page || 1)
  const limit = parseInt(req.query?.limit || 10)

  if (page < 1 || limit < 1) {
    res.send({ responseCode })
  }

  const categoryCode = req.query?.categoryCode


  try {
    lstProducts = mockProductData

    if (categoryCode) {
      lstProducts = lstProducts.filter(x => x.category.code === categoryCode)
    }

    total = lstProducts.length
    const index = (page - 1) * limit

    if (index > total) {
      res.send({
        responseCode: constResCode.SUCCESS,
        lstProducts: [],
        total
      })
    }

    lstProducts = lstProducts.slice(index, index + limit)
  }
  catch (err) {
    console.log(err)
    res.send({ responseCode })
  }

  res.send({
    responseCode: constResCode.SUCCESS,
    lstProducts,
    total
  })
};