const constResCode = require("../../constants/constResCode");
const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcryptjs");

const db = require("../../models");
const { addUserData } = require("../../utils/crud");
// const User = db.user;
// const Role = db.role;

exports.register = async (userInfo) => {
	const user = {
		id: uuidv4(),
		userName: userInfo.userName,
		password: bcrypt.hashSync(userInfo.password ?? uuidv4(), 8),
		fullName: userInfo.fullName,
		phoneNumber: userInfo.phoneNumber,
		isAdmin: userInfo.isAdmin
	};

	addUserData(user)

	return {
		code: constResCode.SUCCESS,
		message: "Đăng ký tài khoản thành công",
		data: {
			id: user.id,
			fullName: user.fullName,
			phoneNumber: user.phoneNumber,
			userName: user.userName,
		}
	}
};