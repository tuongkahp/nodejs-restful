const controllerV2 = require("../../controllers/v2/software.controller");
const { authJwt } = require("../../middlewares/v2");

module.exports = function (app) {
	app.use(function (req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	app.post("/api/v2/softwares", [authJwt.verifyToken], controllerV2.addSoftware);
	app.put("/api/v2/softwares", [authJwt.verifyToken], controllerV2.updateSoftware);
	app.get("/api/v2/softwares", [authJwt.verifyToken], controllerV2.get);
	app.delete("/api/v2/softwares/:id", [authJwt.verifyToken], controllerV2.deleteSoftware);
};