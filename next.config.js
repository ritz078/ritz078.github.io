const glob = require('glob')

module.exports = {
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
    )

    if(!dev) {
      config.resolve.alias = {
        'react': 'preact-compat/dist/preact-compat',
        'react-dom': 'preact-compat/dist/preact-compat'
      }
    }

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
}