const config = require("../../configs/auth.config")
const constResCode = require("../../constants/constResCode")
const authBussiness = require("../../business/v2/auth.business")

var jwt = require("jsonwebtoken")
var bcrypt = require("bcryptjs")
const moment = require("moment")
const { getUsersData, updateUserData } = require("../../utils/crud")

exports.register = async (req, res) => {
	const user = {
		userName: req.body.userName,
		password: req.body.password,
		fullName: req.body.fullName,
		phoneNumber: req.body.phoneNumber,
		avatarUrl: req.body.avatarUrl,
		gender: req.body.gender ?? 0
	}

	// const roles = req.body.roles
	const result = await authBussiness.register(user)
	res.send(result)
}

exports.login = (req, res) => {
	let users = getUsersData()

	let user = users.find(x => x.userName == req.body.userName)

	if (!user)
		return res.send({ code: constResCode.FAILURE, message: "Tên tài khoản hoặc mật khẩu không đúng" })

	var passwordIsValid = bcrypt.compareSync(
		req.body.password,
		user.password
	)

	if (!passwordIsValid) {
		return res.send({
			code: constResCode.FAILURE,
			accessToken: null,
			message: "Tên tài khoản hoặc mật khẩu không đúng"
		})
	}

	if (!user === 0)
		return res.send({
			code: constResCode.FAILURE,
			accessToken: null,
			message: "Tài khoản đã bị khóa"
		})

	var token = jwt.sign({
		id: user.id,
		isAdmin: user.isAdmin,
		userName: user.userName
	}, config.secret, {
		expiresIn: 86400 // 24 hours
	})

	console.log(user);

	res.send({
		code: constResCode.SUCCESS,
		message: "Đăng nhập thành công",
		data: {
			id: user.id,
			userName: user.userName,
			fullName: user.fullName,
			status: user.status,
			accessToken: token,
			expiredTime: moment().add(7, 'days'),
			isAdmin: user.isAdmin ?? false
		}
	})
}

exports.changePassword = (req, res) => {
	let users = getUsersData()

	let user = users.find(x => x.userName == req.user.userName)

	if (!user)
		return res.send({ code: constResCode.FAILURE, message: "Tải khoản không tồn tại" })

	var passwordIsValid = bcrypt.compareSync(
		req.body.oldPassword,
		user.password
	)

	if (!passwordIsValid) {
		return res.send({
			code: constResCode.WRONG_PASSWORD,
			message: "Mật khẩu cũ không chính xác"
		})
	}

	user.password = bcrypt.hashSync(req.body.newPassword ?? uuidv4(), 8)
	updateUserData(user)

	res.send({
		code: constResCode.SUCCESS,
		message: "Đổi mật khẩu thành công"
	})
}