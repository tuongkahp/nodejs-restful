const controllerV2 = require("../../controllers/v2/user.controller")
const { verifySignUp, authJwt } = require("../../middlewares/v2")

module.exports = function (app) {
	app.use(function (req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		)
		next()
	})

	app.post("/api/v2/users", [authJwt.verifyToken], controllerV2.addUser)
	app.put("/api/v2/users", [authJwt.verifyToken], controllerV2.updateUser)
	app.get("/api/v2/users", [authJwt.verifyToken], controllerV2.get)
	app.delete("/api/v2/users/:id", [authJwt.verifyToken], controllerV2.deleteUser)
}