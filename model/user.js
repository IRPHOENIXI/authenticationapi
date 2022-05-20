//digunakan untuk membuat model database

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			min: 6,
			max: 255,
			unique: true
		},
		FullName: {
			type: String,
			required: true,
			min: 6,
			max: 255
		},
		PhoneNumber: {
			type: String,
			required: true,
			min: 6,
			max: 255
		},
		Email: {
			type: String,
			required: true,
			min: 6,
			max: 255
		},
		password: {
			type: String,
			required: true,
			min: 8,
			max: 1024
		}
	},

	{ collection: 'userdata' }
)

const model = mongoose.model('UserSchema', UserSchema)

module.exports = model
