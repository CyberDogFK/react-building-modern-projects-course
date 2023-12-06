const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                // exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: { 
                    presets: ["@babel/env"] 
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx', '.ts', '.tsx'] },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        static: {
        directory: path.join(__dirname, 'public/'),
        },
        port: 3000,
        // host: 'http://localhost:3000/dist',
        host: 'localhost',
        // addr: "/dist",
        liveReload: true,
        // hot: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
}