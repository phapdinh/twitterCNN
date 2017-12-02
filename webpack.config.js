module.exports = {
    entry: "./public/javascripts/app.js",
    output: {
        path: __dirname + '/public/javascripts',
        filename: "bundle.js"
    },
    module: {
		preLoaders: [
            {
                test: /app.js/g, // include .js files
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                loader: "jshint-loader"
            }
        ],
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};