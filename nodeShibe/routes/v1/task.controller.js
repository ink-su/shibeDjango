var express = require('express')
var router = express.Router()

module.exports = {
  getAll: (req, res) => {
    res.send('Birds home page');
  },
};