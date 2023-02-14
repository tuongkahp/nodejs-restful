const constResCode = require("../../constants/constResCode")

exports.uploadFile = (req, res) => {

	if (!req.file) {
		res.status({
			code: constResCode.FAILURE,
			message: 'Lưu ảnh thất bại'
		})

		return next(err)
	}

	res.json({
		code: constResCode.SUCCESS,
		message: 'Lưu ảnh thành công',
		fileUrl: '/images/' + req.file.filename
	})
}