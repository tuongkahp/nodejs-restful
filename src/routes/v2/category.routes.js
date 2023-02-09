const { authJwt } = require("../../middlewares");
const controller = require("../../controllers/v2/category.controller");

module.exports = function (app) {
	app.use(function (req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	app.get("/api/v2/categories", controller.get);
};
