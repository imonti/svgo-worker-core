const webpack = require('webpack')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');

const libraryName = "SVGO";

const outputFile = libraryName + ".js";
module.exports = {
    optimization: {
        minimizer: [new TerserPlugin({
            cache: true,
            parallel: true,
            extractComments: true
        })],
    },
    node: {
        fs: 'empty'
    },
    entry: ['./node_modules/svgo/lib/svgo'],
    output: {
        publicPath: '/',
        filename: outputFile,
        library: libraryName,
        libraryTarget: "umd",
        libraryExport: 'default'
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.js$/,
            include: path.join(__dirname, 'src'),
            loader: 'babel-loader',
            query: {
                presets: [
                    ['env', { targets: { chrome: 70 } }], {
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                ]
            }
        }]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true
        })
    ]
}