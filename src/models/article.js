'use strict'
const mongoose = require('mongoose')

var articleSchema = new mongoose.Schema({
  trend: String,
  title: String,
  description: String,
  source: String,
  media: String,
  link: String,
  timestamp: Number
})

var Article = mongoose.model('Article', articleSchema)

module.exports = Article
