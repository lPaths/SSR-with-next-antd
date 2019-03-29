const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')
// const lessToJS = require('less-vars-to-js')
// const fs = require('fs')
// const path = require('path')

// const isProd = process.env.NODE_ENV === 'production'

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => { }
}

// const themeVariables = lessToJS(
//   fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
// )

module.exports = () => {
  return withLess(
    withCSS({
      lessLoaderOptions: {
        javascriptEnabled: true
      }
    })
  )
}
