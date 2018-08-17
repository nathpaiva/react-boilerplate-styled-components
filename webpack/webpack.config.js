'user strict';

const { join } = require('path');

const paths = {
  src: join(__dirname, '..', 'src'),
  dist: join(__dirname, '..', 'dist')
};

module.exports = {
  entry: {
    main: join(paths.src, 'index')
  },

  output: {
    path: paths.dist,
    filename: '[name]-[chunkhash].js'
  },

  htmlPluginConfig: {
    title: 'React Boilerplate',
    template: join(paths.src, 'html', 'template.html'),
    favicon: join(paths.src, 'images', 'favicon.ico')
  },

  jsLoader: {
    dev: {
      test: /\.js$/,
      include: paths.src,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [['env', { modules: false }], 'stage-0', 'react'],
          plugins: [
            'react-hot-loader/babel',
            [
              'babel-plugin-styled-components', {
                fileName: true,
                displayName: true,
                minify: false
              }
            ],
            ['transform-runtime', {
              helpers: false,
              polyfill: false,
              regenerator: true
            }]
          ]
        }
      }
    },
    prod: {
      test: /\.js$/,
      include: paths.src,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [['env', { modules: false }], 'stage-0', 'react'],
          plugins: [
            [
              'babel-plugin-styled-components', {
                fileName: false,
                displayName: false,
                minify: true
              }
            ],
            ['transform-react-remove-prop-types', {
              removeImport: true
            }],
            ['transform-remove-console', { 'exclude': ['error', 'warn'] }]
          ]
        }
      }
    }
  },

  fileLoader: {
    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|txt)(\?.*)?$/,
    include: paths.src,
    use: {
      loader: 'file-loader',
      options: {
        name: 'media/[name].[hash:8].[ext]'
      }
    }
  },

  urlLoader: {
    test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
    include: paths.src,
    use: {
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'media/[name].[hash:8].[ext]'
      }
    }
  },

  resolve: {
    alias: {
      src: paths.src,
      components: join(paths.src, 'components'),
      utils: join(paths.src, 'utils')
    }
  }
};
