var mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

// mongoose.connect('mongodb://wei1:0987654321@ds161018.mlab.com:61018/weiwei')
mongoose.connect('mongodb://localhost:27017/weiweiblog')

var userSchema = new mongoose.Schema({
	name: String,
	pwd: String,
})

var articleSchema = new mongoose.Schema({
	title: String,
	date: Date,
	articleContent: String,
	state: String,
	label: String,
})

var tagSchema = new mongoose.Schema({
    tagName: String,
    tagNumber: Number,
})

var personalInformationSchema = new mongoose.Schema({
    name: String,
    individualitySignature: String,
    introduce: String,
})

var Models = {
	User: mongoose.model('User', userSchema),
	Article: mongoose.model('Article', articleSchema),
	TagList: mongoose.model('TagList', tagSchema),
    PersonalInformation: mongoose.model('PersonalInformation', personalInformationSchema),
}

module.exports = Models
