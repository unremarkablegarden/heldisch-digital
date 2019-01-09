'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('building for production...')
spinner.start()

const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

// webpackConfig.plugins.push(
//   new PrerenderSPAPlugin({
//     staticDir: path.resolve(__dirname, '..', 'dist'),
//     // staticDir: path.join(__dirname, ,'..', 'dist'),
//     routes: [
//       '/',
//       '/denke',
//       '/cases',
//       '/cases/spreequell',
//       '/cases/arnecke-sibeth-dabelstein',
//       '/cases/rueckblende',
//       '/cases/hartmannbund',
//       '/cases/energie-update',
//       '/impressum',
//       '/datenschutz',
//     ],
//     renderer: new Renderer({
//       injectProperty: '__PRERENDER_INJECTED',
//       inject: {
//         prerendered: true
//       },
//       renderAfterDocumentEvent: 'app.rendered'
//     })
//   }));

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }
    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
