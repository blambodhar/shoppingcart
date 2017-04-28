module.exports = (function () {
    var config = {
        'root': '.',
        'app': './app',
        'css': './app/css',
        'scss': './app/scss',
        'js': './app/js',
        'index': './index.html',
        'allCSS': '/**/*.css',
        'allJS': '/**/*.js',
        'allModules': '/**/*.module.js',
        'appJS': './sc.app.js',
        'templates': './app/partial',
        'bower': {
            'directory': './lib/vendor',
            'json': require('./bower.json'),
            'ignorePath': '../..'
        }
    };

    config.getWiredepDefaultOptions = function() {
        var options = {
            directory: config.bower.directory,
            bowerJson: config.bower.json,
            ignorePath: config.bower.ignorePath
        };

        return options;
    }
    
    return config;
})();