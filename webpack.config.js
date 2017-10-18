const path = require('path');

module.exports = {
    entry: './app/app.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react'],
            },
        }],
    },
    stats: {
        colors: true,
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
