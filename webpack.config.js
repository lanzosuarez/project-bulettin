const path = require('path');
const webpack = require('webpack');



module.exports = {
    devtool: "eval-cheap-module-source-map",
    entry:{
       app: './app/index'
    },
    output:{
        path: path.join(__dirname, '/public/js'),
        publicPath: "/",
        filename: '[name].bundle.js'
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude:'/node_modules',
                loader:'babel-loader',
                query: {
                    presets: ['latest', 'react', 'es2015']
                }
            },
            {test: /\.css$/, loader:'style-loader!css-loader'}
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     //sourceMap:true
        // }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
    ],
}