module.exports = {
    entry: './public/boot.jsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dest/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel']
                // loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};