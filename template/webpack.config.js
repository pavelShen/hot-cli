'use strict';
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = require('./config/pack.json');
let util = require('./util');

let base = path.resolve(config.base, config.target);
let dest = path.resolve(config.dest, config.target);

let modules = {
    babel: {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
            cacheDirectory: true
        }
    },
    css:{
        test: /\.css$/,
        loader: util.isDEV ? 'style!css' : ExtractTextPlugin.extract('style-loader', 'css-loader')
    },
    scss: {
        test: /\.scss$/,
        loader: util.isDEV ? 'style-loader!css-loader!postcss-loader!sass-loader' : ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader')
    },
    vue: {
        test: /\.vue$/,
        loader: 'vue'
    },
    json: {
        test: /\.json$/,
        loader: 'json'
    },
    url: {
        test: /\.(png|jpg|gif|ico|otf|eot|svg|ttf|woff)$/, // edit this for additional asset file types
        loader: 'url',
        query: {
            limit: 4096, // inline files smaller then 10kb as base64 dataURL
            name: '[name].[ext]?[hash]' // fallback to file-loader with this naming scheme
        }
    }
};

let defaultEntry = path.resolve(base, 'main.js');

dest += util.isRelease ? '/build' : '/dev';

let output = {
    path: path.resolve(dest),
    publicPath: util.getPublicPath(config.target)
};



let pack = {
    entry: {
        main: [defaultEntry],
    },
    output: {
        path: output.path,
        publicPath: output.publicPath,
        filename: util.isRelease ? '[name].[hash:8].js' : '[name].js'
    },
    module: {
        loaders: [
            modules.css,
            modules.scss,
            modules.json,
            modules.vue,
            modules.url
        ]
    },
    plugins: [],
    postcss: [autoprefixer({
        browsers: ['> 5%']
    })],
    resolve: {
        extensions: ['', '.js', '.scss', '.vue'],
        modulesDirectories: ['node_modules']
    },
    watch: util.isDEV,
    debug: util.isDEV || util.isQA,
    devtool: util.isDEV || util.isQA ? 'eval' : null
};
if(util.isDEV){
    let hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
    pack.entry.main.push(hotMiddlewareScript);
}

let extractCss = util.isRelease ? '[name].[hash:8].css' : '[name].css';
let plugins = {
    define: new webpack.DefinePlugin({
        __DEV__: JSON.stringify(util.isDEV),
        __QA__: JSON.stringify(util.isQA),
        __PRE__: JSON.stringify(util.isPRE),
        __RELEASE__: JSON.stringify(util.isRelease)
    }),
    uglify: new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    css: new ExtractTextPlugin(extractCss),
    manifest: new ManifestPlugin(),
    order: new webpack.optimize.OccurenceOrderPlugin(),
    hot: new webpack.HotModuleReplacementPlugin(),
    noerror: new webpack.NoErrorsPlugin()
};

if(util.isDEV){
    pack.plugins.push(plugins.order);
    pack.plugins.push(plugins.hot);
    pack.plugins.push(plugins.noerror);
}else{
    pack.plugins.push(plugins.manifest);
}

pack.plugins.push(plugins.define);
pack.plugins.push(plugins.css);

if (util.isRelease) {
    pack.plugins.push(plugins.uglify);
}

module.exports = {
    config: pack,
    modules: modules
};
