const constResCode = require("../../constants/constResCode");
const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcryptjs");

const db = require("../../models");
const User = db.user;
const Role = db.role;

exports.register = async (userInfo, roles) => {
	const user = new User({
		userName: userInfo.userName,
		password: bcrypt.hashSync(userInfo.password ?? uuidv4(), 8),
		fullName: userInfo.fullName,
		phoneNumber: userInfo.phoneNumber,
		avatarUrl: userInfo.avatarUrl
	});

	return new Promise(reslove => {
		user.save(async (err, user) => {
			if (err) {
				reslove({
					code: constResCode.FAILURE,
					message: err
				});
			}

			if (roles) {
				Role.find({ name: { $in: req.body.roles } }, async (err, roles) => {
					if (err) {
						reslove({
							code: constResCode.FAILURE,
							message: err
						});
					}

					user.roles = roles.map(role => role._id);
					user.save(err => {
						if (err) {
							reslove({ message: err });
						}

						reslove({
							code: constResCode.SUCCESS,
							message: "User was registered successfully!"
						});
					});
				}
				);
			} else {
				Role.findOne({ name: "user" }, async (err, role) => {
					if (err) {
						reslove({
							code: constResCode.FAILURE,
							message: err
						});
					}

					user.roles = [role._id];
					user.save(err => {
						if (err) {
							reslove({
								code: constResCode.FAILURE,
								message: err
							});
						}

						reslove({
							code: constResCode.SUCCESS,
							message: "User was registered successfully!",
							data: {
								_id: user._id,
								fullName: user.fullName,
								phoneNumber: user.phoneNumber,
								email: user.email,
								roles: [role]
							}
						});
					});
				});
			}
		});
	});
};