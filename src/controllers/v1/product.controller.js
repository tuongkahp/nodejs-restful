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
  const sortType = parseInt(req.query?.sortType || 0)
  const sortValue = parseInt(req.query?.sortValue || 0)

  try {
    lstProducts = mockProductData

    if (categoryCode) {
      lstProducts = lstProducts.filter(x => x.category.code === categoryCode)
    }

    if (sortType) {
      switch (sortType) {
        case 1:
          lstProducts = lstProducts.sort((x, y) => sortValue * (x.promotionalPrice - y.promotionalPrice))
          break;
        case 2:
          lstProducts = lstProducts.sort((x, y) => sortValue * (x.sold - y.sold))
      }
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

exports.getDetail = async (req, res) => {
  let responseCode = constResCode.FAILURE
  let productCode = req.params.productCode
  let product = null

  try {
    product = mockProductData.find(x => x.code === productCode)
  }
  catch (err) {
    console.log(err)
    res.send({ responseCode })
  }

  res.send({
    responseCode: constResCode.SUCCESS,
    product
  })
};

