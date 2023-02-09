//read the user data from json file
const saveUserData = (data) => {
	const stringifyData = JSON.stringify(data)
	fs.writeFileSync('users.json', stringifyData)
}

//get the user data from json file
const getUserData = () => {
	const jsonData = fs.readFileSync('users.json')
	return JSON.parse(jsonData)
}

module.exports = {
	saveUserData,
	getUserData
}
