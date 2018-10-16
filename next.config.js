const glob = require('glob')
const withOffline = require('next-offline');

module.exports = withOffline({
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      }
      ,
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      }
    );

    return config
  },

  exportPathMap() {
    const pathMap = {}
    glob.sync('pages/**/*.js', { ignore: 'pages/_document.js' }).forEach(s => {
      const path = s.split(/(pages|\.)/)[2].replace(/^\/index$/, '/')
      console.log(path)
      pathMap[path] = { page: path }
    })
    return pathMap
  }
})
