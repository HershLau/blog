var mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

mongoose.connect('mongodb://localhost:27017/blog')

var userSchema = new mongoose.Schema({
  account: String,
  name: String,
  pwd: String,
  individualitySignature: String,
  introduce: String
})

var articleSchema = new mongoose.Schema({
  title: String,
  date: Date,
  articleContent: String,
  state: String,
  uid: String,
  tags: [String]
})

var tagSchema = new mongoose.Schema({
  tagName: String,
  uid: String,
  aids: [String]
})

var Models = {
  User: mongoose.model('User', userSchema),
  Article: mongoose.model('Article', articleSchema),
  TagList: mongoose.model('TagList', tagSchema)
}

module.exports = Models
