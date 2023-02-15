const { verifySignUp, authJwt } = require("../../middlewares/v2");
const controllerV2 = require("../../controllers/v2/auth.controller");

module.exports = (app) => {
	app.use(function (req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	app.post(
		"/api/v2/auth/register",
		[
			verifySignUp.checkDuplicateUsernameOrEmail
		],
		controllerV2.register
	);

	app.post("/api/v2/auth/login", controllerV2.login)
	app.post("/api/v2/auth/change-password", [authJwt.verifyToken], controllerV2.changePassword)
};
