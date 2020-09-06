// Собирает проект
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // __dirname Путь абсолютный для всех ОС + папка dist 
    },
    devServer: {
        port: 3000
    },
    plugins: [
            new HTMLWebpackPlugin ({
            template: './src/index.html'
            }),
            new ImageminPlugin ({
            test: './images/test.png',
            optipng: {optimizationLevel: 9},
            minFileSize: 10000, 
            jpegtran: { progressive: true }
            })
      ], 
    module: {    
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
}
