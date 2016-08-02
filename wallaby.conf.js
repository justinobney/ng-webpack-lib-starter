var wallabyWebpack = require('wallaby-webpack');
var webpackConfig = require('./webpack.config.js');
var babel = require('babel-core');

webpackConfig.entryPatterns = [
  'before-each-test.js',
  'src/index.js',
  'src/**/*.spec.js'
];

webpackConfig.externals = {};

module.exports = function (wallaby) {
    return {
        debug: true,
        files: [
          {pattern: 'node_modules/angular/angular.js', instrument: false},
          {pattern: 'node_modules/babel-polyfill/browser.js', instrument: false},
          {pattern: 'before-each-test.js', load: false},
          {pattern: 'src/**/*.js', load: false},
          {pattern: 'src/**/*.spec.js', ignore: true}
        ],
        tests: [
            {pattern: 'src/**/*.spec.js', load: false}
        ],
        compilers: {
            '**/*.js': wallaby.compilers.babel({
                babel: babel,
                sourceMap: true,
                presets: ['es2015', 'stage-1']
            })
        },
        postprocessor: wallabyWebpack(webpackConfig),
        testFramework: 'jasmine',
        bootstrap: function () {
            window.__moduleBundler.loadTests();
        }
    }
};
