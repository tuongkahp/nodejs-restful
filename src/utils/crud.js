const fs = require('fs')

//read the user data from json file
const addUserData = (data) => {
	let lstUsers = getUsersData() || []
	lstUsers.push(data)
	let stringifyData = JSON.stringify(lstUsers)
	fs.writeFileSync('data/users.json', stringifyData)
}

//get the user data from json file
const getUsersData = () => {
	let jsonData = fs.readFileSync('data/users.json').toString() || "[]"
	return JSON.parse(jsonData)
}

//read the user data from json file
const addSoftwareData = (data) => {
	let lstSoftwares = getSoftwaresData() || []
	lstSoftwares.push(data)
	let stringifyData = JSON.stringify(lstSoftwares)
	fs.writeFileSync('data/softwares.json', stringifyData)
}

const updateSoftwareData = (data) => {
	let softwares = getSoftwaresData() || []

	let software = softwares.find(x => x.id == data.id)

	if (!software) return

	let newSoftwares = softwares.map(x => (x.id === data.id ? { ...x, ...data } : x));
	console.log(newSoftwares);

	let stringifyData = JSON.stringify(newSoftwares)
	fs.writeFileSync('data/softwares.json', stringifyData)
}

const getSoftwaresData = () => {
	let jsonData = fs.readFileSync('data/softwares.json').toString() || "[]"
	return JSON.parse(jsonData)
}

module.exports = {
	addUserData: addUserData,
	getUsersData: getUsersData,
	addSoftwareData,
	getSoftwaresData,
	updateSoftwareData
}
