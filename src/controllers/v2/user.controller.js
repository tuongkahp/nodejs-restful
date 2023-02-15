const { v4 } = require("uuid");
const constResCode = require("../../constants/constResCode");
const { addUserData, getUsersData, updateUserData, deleteUserData } = require("../../utils/crud");
const timeHelper = require("../../utils/timeHelper");
const bcrypt = require("bcryptjs");

exports.get = async (req, res) => {
	let code = constResCode.FAILURE
	let users = null
	let total = null

	const page = parseInt(req.query?.page || 1)
	const limit = parseInt(req.query?.limit || 10)

	if (page < 1 || limit < 1) {
		res.send({ code: code })
	}

	try {
		users = getUsersData()

		total = users.length
		const index = (page - 1) * limit

		if (index > total) {
			res.send({
				code: constResCode.SUCCESS,
				lstProducts: [],
				total
			})
		}

		users = users.slice(index, index + limit)
	}
	catch (err) {
		console.log(err)
		res.send({ code: code })
	}

	res.send({
		code: constResCode.SUCCESS,
		data: users,
		total
	})
};

exports.addUser = async (req, res) => {
	let userInfo = req.body

	if (!userInfo.userName || !userInfo.password)
		res.send({
			code: constResCode.FAILURE,
			message: "Thông tin tài khoản không hợp lệ"
		})

	let users = getUsersData()
	let user = users.find(x => x.userName == req.body.userName)

	if (user) {
		res.send({ code: constResCode.FAILURE, message: "Tài khoản đã tồn tại" });
		return;
	}

	user = {
		id: v4(),
		userName: userInfo.userName,
		password: bcrypt.hashSync(userInfo.password ?? v4(), 8),
		fullName: userInfo.fullName,
		phoneNumber: userInfo.phoneNumber,
		isAdmin: userInfo.isAdmin,
		status: userInfo.status ?? 0,
		createdUser: req.user?.userName,
		createdTime: timeHelper.now(),
		updatedUser: req.user?.userName,
		updatedTime: timeHelper.now()
	};

	addUserData(user)

	res.send({
		code: constResCode.SUCCESS,
		message: "Thêm tài khoản thành công"
	})
}

exports.updateUser = async (req, res) => {
	let users = getUsersData()
	let user = users.find(x => x.id == req.body.id)

	if (!user) {
		res.send({
			code: constResCode.FAILURE,
			message: "Tài khoản không tồn tại"
		})
		return
	}

	user = {
		...user,
		...req.body,
		updatedUser: req.user?.userName,
		updatedTime: timeHelper.now()
	}

	if (req.body.password)
		user.password = bcrypt.hashSync(req.body.password ?? uuidv4(), 8)

	updateUserData(user)

	res.send({
		code: constResCode.SUCCESS,
		message: "Sửa thông tin tài khoản thành công"
	})
}

exports.deleteUser = async (req, res) => {
	let users = getUsersData()
	let user = users.find(x => x.id == req.params?.id)

	if (!user) {
		res.send({
			code: constResCode.FAILURE,
			message: "Tài khoản không tồn tại"
		})
		return
	}

	deleteUserData(req.params?.id)

	res.send({
		code: constResCode.SUCCESS,
		message: "Xóa tài khoản thành công"
	})
}