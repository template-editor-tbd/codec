const path = require('path');

module.exports = {
    entry: [
        './app/application.js'
    ],
    output: {
        path: './public',
        filename: 'bundle.js',
    },
    resolve: {
        root: [
            path.resolve('./app/'),
            path.resolve('./config/'),
            path.resolve('./di/'),
        ],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
