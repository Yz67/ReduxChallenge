const webpack = require('webpack');


module.exports = {
    entry: './reactApp/app.js',
    output: {
        path: __dirname + '/build',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                        plugins: ['transform-object-rest-spread']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 1,
                            localIdentName: '[name]--[local]--[hash:base64:8]'
                        }
                    },
                    'postcss-loader' // has separate config, see postcss.config.js nearby
                ]
            },
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
