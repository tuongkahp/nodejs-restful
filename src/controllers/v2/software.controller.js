// const config = require("../../configs/auth.config");
const { uuid } = require("uuidv4");
const constResCode = require("../../constants/constResCode");
const { addSoftwareData, getSoftwaresData, updateSoftwareData } = require("../../utils/crud");
const timeHelper = require("../../utils/timeHelper");
// const authBussiness = require("../../business/v2/auth.business");
// const { OAuth2Client } = require('google-auth-library');
// const client = new OAuth2Client(process.env.CLIENT_ID);

// const db = require("../../models");
// const mockProductData = require("../../../mockProductData");
// const Product = db.template;

exports.get = async (req, res) => {
	let code = constResCode.FAILURE
	let softwares = null
	let total = null

	const page = parseInt(req.query?.page || 1)
	const limit = parseInt(req.query?.limit || 10)

	if (page < 1 || limit < 1) {
		res.send({ code: code })
	}

	// const categoryCode = req.query?.categoryCode
	// const sortType = parseInt(req.query?.sortType || 0)
	// const sortValue = parseInt(req.query?.sortValue || 0)

	try {
		softwares = getSoftwaresData()

		// if (categoryCode) {
		// 	softwares = softwares.filter(x => x.category.code === categoryCode)
		// }

		// if (sortType) {
		// 	switch (sortType) {
		// 		case 1:
		// 			softwares = softwares.sort((x, y) => sortValue * (x.promotionalPrice - y.promotionalPrice))
		// 			break;
		// 		case 2:
		// 			softwares = softwares.sort((x, y) => sortValue * (x.sold - y.sold))
		// 	}
		// }

		total = softwares.length
		const index = (page - 1) * limit

		if (index > total) {
			res.send({
				code: constResCode.SUCCESS,
				lstProducts: [],
				total
			})
		}

		softwares = softwares.slice(index, index + limit)
	}
	catch (err) {
		console.log(err)
		res.send({ code: code })
	}

	res.send({
		code: constResCode.SUCCESS,
		data: softwares,
		total
	})
};

exports.getDetail = async (req, res) => {
	let code = constResCode.FAILURE
	let productCode = req.params.productCode
	let product = null

	try {
		product = mockProductData.find(x => x.code === productCode)
	}
	catch (err) {
		console.log(err)
		res.send({ code })
	}

	res.send({
		code: constResCode.SUCCESS,
		product
	})
};

exports.addSoftware = async (req, res) => {
	const software = {
		id: uuid(),
		name: req.body.name,
		url: req.body.url,
		logoUrl: req.body.logoUrl,
		status: req.body.status,

		createdUser: req.user?.userName,
		createdTime: timeHelper.now(),
		updatedUser: req.user?.userName,
		updatedTime: timeHelper.now()
	}

	addSoftwareData(software)

	res.send({
		code: constResCode.SUCCESS,
		message: "Thêm sản phẩm thành công"
	})
}

exports.updateSoftware = async (req, res) => {
	let softwares = getSoftwaresData()
	let software = softwares.find(x => x.id == req.body.id)

	if (!software) {
		res.send({
			code: constResCode.FAILURE,
			message: "Sản phẩm không tồn tại"
		})
		return
	}

	software = {
		...software,
		name: req.body.name,
		url: req.body.url,
		logoUrl: req.body.logoUrl,
		status: req.body.status,
		updatedUser: req.user?.userName,
		updatedTime: timeHelper.now()
	}

	updateSoftwareData(software)

	res.send({
		code: constResCode.SUCCESS,
		message: "Sửa sản phẩm thành công"
	})
}