const webpack = require('webpack');

const config = {
  entry : __dirname + '/js/index.jsx',
  output:{
    path : __dirname + '/dist',
    filename : 'bundle.js'
  },
  resolve :{
    extenstions : ['.js', '.jsx', '.css']
  }
};

module.export = config;
