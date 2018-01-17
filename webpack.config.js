const path = require('path')
const webpack = require('webpack')
const ExtractText = require('extract-text-webpack-plugin')

const UglifyJS = webpack.optimize.UglifyJsPlugin

const config = require('config')
const isProd = config.get('env') !== 'dev'

module.exports = {
  entry: {
    app: './client/index.ts'
  },
  output: {
    path: path.join(__dirname, './build'),
    publicPath: '/',
    filename: 'js/[name].js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
    }, {
      test: /\.ts$/,
      exclude: /node_modules|vue\/src/,
      loader: 'ts-loader',
      options: {
        compilerOptions: {
          target: 'es5'
        }
      }
    }, {
      test: /\.vue$/,
      use: [
        {
          loader: 'vue-loader',
          options: {
            extractCSS: true,
            preserveWhitespace: false
          }
        },
        {
          loader: 'iview-loader',
          options: {
            prefix: false
          }
        }
      ]
    },
    {
      test: /iview\/.*?js$/,
      loader: 'babel-loader'
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader'
        }
      ]
    },
    {
      test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
      loader: 'url-loader?limit=1024'
    }]
  },
  devtool: 'sourcemap',
  devServer: {
    port: config.get('devPort'),
    proxy: {
      '/': `http://localhost:${config.get('port')}`
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isProd ? '"production"' : '"development"'
    }),

    new UglifyJS({
      exclude: isProd ? null : /.*/,
      parallel: true,
      uglifyOptions: {
        ecma: 8,
      },
      sourceMap: true
    }),

    new ExtractText('style/app.css')
  ]
}
