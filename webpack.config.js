const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')


let config = {

    entry: {
        app: [
            path.resolve(__dirname, 'src/app.js')
        ],
        styles: [
            path.resolve(__dirname, 'assets/sass/styles.sass')
        ]
    },

    output: {
        filename: '[name]-[hash].js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['lodash'],
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            indentedSyntax: true
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.pug$/,
                oneOf: [
                    {
                        resourceQuery: /^\?vue/,
                        use: ['pug-plain-loader']
                    }
                ]
            }
        ]
    },

    plugins: [
        new LodashModuleReplacementPlugin,
        new CleanWebpackPlugin(['dist']),
        new VueLoaderPlugin(),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
}

module.exports = (env) => {

    if (env.mode === 'development') {
    }

    if (env.mode === 'production') {
    }

    return config;
}
