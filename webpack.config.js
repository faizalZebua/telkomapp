const path = require('path');

module.exports = {
    mode: 'production',
    entry: './views/index.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'index.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js||.jsx$/,
                exclude: '/node_modules/',
                use: 'babel-loader'
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    }
};