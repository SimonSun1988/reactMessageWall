module.exports = {
    entry: './public/boot.jsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public/' 
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};