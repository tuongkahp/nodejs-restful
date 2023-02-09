const constResCode = require("../../constants/constResCode");
const db = require("../../models");
const ROLES = db.ROLES;
// const User = db.user;
let User = './data/user.json'

checkDuplicateUsernameOrEmail = (req, res, next) => {
	let user = User.find(x => x.userName == req.body.userName)

	if (user) {
		res.send({ code: constResCode.FAILURE, message: "Failed! Email is already in use!" });
		return;
	}

	next();
};


const verifySignUp = {
	checkDuplicateUsernameOrEmail,
};

module.exports = verifySignUp;
