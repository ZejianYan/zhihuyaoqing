var webpack = require('webpack');

module.exports = {
    entry:'./src/js/index.js',
    output:{
        path:'./static/',
        publicPath:'http://localhost:8080/static',
        filename:'[name].js'
    },
    module:{
        loaders:[
            {test:/.js$/, loader:'babel',query:{presets:['react','es2015']}, exclude:/node_modules/},
            {test:/.less$/,loader:'style!css!less'},
            {test:/.(png|jpg)$/,loader:'url?limit=8192'}
        ]
    }
}