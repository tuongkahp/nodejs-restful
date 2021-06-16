const { verifySignUp } = require("../middlewares");
const controllerV1 = require("../controllers/v1/auth.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/v1/auth/register",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controllerV1.register
  );

  app.post("/api/v1/auth/login", controllerV1.login);
  app.post("/api/v1/auth/login-google", controllerV1.loginGoogle);
};
