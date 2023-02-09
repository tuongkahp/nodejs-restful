const { authJwt } = require("../../middlewares");
const controller = require("../../controllers/v2/user.controller");
var multer = require('multer');
var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './public/images');
	},
	filename: (req, file, cb) => {
		console.log(file);
		var filetype = '';
		if (file.mimetype === 'image/gif') {
			filetype = 'gif';
		}
		if (file.mimetype === 'image/png') {
			filetype = 'png';
		}
		if (file.mimetype === 'image/jpeg') {
			filetype = 'jpg';
		}
		cb(null, 'image-' + Date.now() + '.' + filetype);
	}
});

var upload = multer({ storage: storage });

module.exports = function (app) {
	app.use(function (req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	app.post(
		"/api/v2/file",
		[authJwt.verifyToken, upload.single('file')],
		controller.uploadFile
	);
};
