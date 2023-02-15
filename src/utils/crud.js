const fs = require('fs')

//read the user data from json file
const addUserData = (data) => {
	let lstUsers = getUsersData() || []
	lstUsers.push(data)
	let stringifyData = JSON.stringify(lstUsers)
	fs.writeFileSync('data/users.json', stringifyData)
}

const updateUserData = (data) => {
	let users = getUsersData() || []

	let user = users.find(x => x.id == data.id)

	if (!user) return

	let newUser = users.map(x => (x.id === data.id ? { ...x, ...data } : x));

	let stringifyData = JSON.stringify(newUser)
	fs.writeFileSync('data/users.json', stringifyData)
}

//get the user data from json file
const getUsersData = () => {
	let jsonData = fs.readFileSync('data/users.json').toString() || "[]"
	return JSON.parse(jsonData)
}

const deleteUserData = (id) => {
	let users = getUsersData() || []

	let user = users.find(x => x.id == id)

	if (!user) return

	let newUsers = users.filter(x => x.id !== id);

	let stringifyData = JSON.stringify(newUsers)
	fs.writeFileSync('data/users.json', stringifyData)
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

	let stringifyData = JSON.stringify(newSoftwares)
	fs.writeFileSync('data/softwares.json', stringifyData)
}

const getSoftwaresData = () => {
	let jsonData = fs.readFileSync('data/softwares.json').toString() || "[]"
	return JSON.parse(jsonData)
}

const deleteSoftwareData = (id) => {
	let softwares = getSoftwaresData() || []

	let software = softwares.find(x => x.id == id)

	if (!software) return

	let newSoftwares = softwares.filter(x => x.id !== id)

	let stringifyData = JSON.stringify(newSoftwares)
	fs.writeFileSync('data/softwares.json', stringifyData)
}

module.exports = {
	//User
	addUserData,
	getUsersData,
	updateUserData,
	deleteUserData,

	// Software
	addSoftwareData,
	getSoftwaresData,
	updateSoftwareData,
	deleteSoftwareData
}
