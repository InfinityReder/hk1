var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var pathToReactDOM = path.resolve(node_modules, 'react-dom/dist/react-dom.js');
config = {
    entry: [path.resolve(__dirname, 'app.js')],
    //resolve: {
    //    alias: {
    //        'react': pathToReact,
    //        'react-dom': pathToReactDOM
    //    }
    //},
    output: {
        //path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel'
        }],
        //noParse: [pathToReact]
    }
};

module.exports = config;
