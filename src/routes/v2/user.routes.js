const { authJwt } = require("../../middlewares");
const controller = require("../../controllers/v2/user.controller");

module.exports = function (app) {
	app.use(function (req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	app.get("/api/test/all", controller.allAccess);

	app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

	app.get(
		"/api/test/mod",
		[authJwt.verifyToken, authJwt.isModerator],
		controller.moderatorBoard
	);

	app.get(
		"/api/test/admin",
		[authJwt.verifyToken, authJwt.isAdmin],
		controller.adminBoard
	);

	app.get(
		"/api/v2/user",
		[authJwt.verifyToken],
		controller.getUserInfo
	);

	app.put(
		"/api/v2/user/change-pass",
		[authJwt.verifyToken],
		controller.changePass
	);

	app.put(
		"/api/v2/user",
		[authJwt.verifyToken],
		controller.updateUserInfo
	);
};
