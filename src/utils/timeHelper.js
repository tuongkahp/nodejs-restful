const moment = require("moment");

module.exports = {
	now: () => moment().format('yyyy-MM-DD HH:mm:ss')
}