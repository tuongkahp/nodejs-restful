const constResCode = require("../../constants/constResCode");
const db = require("../../models");
const { getUsersData } = require("../../utils/crud");
const ROLES = db.ROLES;
// const User = db.user;
let User = './data/user.json'

checkDuplicateUsernameOrEmail = (req, res, next) => {
	let users = getUsersData()

	let user = users.find(x => x.userName == req.body.userName)

	if (user) {
		res.send({ code: constResCode.FAILURE, message: "Tài khoản đã tồn tại" });
		return;
	}

	next();
};


const verifySignUp = {
	checkDuplicateUsernameOrEmail,
};

module.exports = verifySignUp;
