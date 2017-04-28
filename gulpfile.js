(function(){
    
    var del = require('del'),
        gulp = require('gulp'),
        $ = require('gulp-load-plugins')({lazy: true, pattern: ['gulp-*']});
        //inject = require('gulp-inject'),
        //gutil = require('gulp-util');
    
    
    var config = require('./gulpconfig');
    
    
    gulp.task('inject-css-js', function(){

        return gulp
            .src(config.index)
            .pipe($.inject(gulp.src([config.css + config.allCSS])))
            .pipe($.inject(gulp.src([ 
                config.js + config.allModules, 
                config.js + config.appJS, 
                config.js + config.allJS
            ])))
            .pipe(gulp.dest(config.root));
    });

    /**!
     * injecting bower dependecy and custom js n css to index.html file
     * bower dependencies are managed through wiredep node package module and
     * custom dependencies are managed thru gulp-inject(gulp plugin)
     */
    gulp.task('wiredep', function() {
        log('injecting bower css, bower js and app js file to index.html');
        var options = config.getWiredepDefaultOptions();
        var wiredep =  require('wiredep').stream;

        return gulp.src(config.index)
            .pipe(wiredep(options))
            //.pipe($.inject(gulp.src(config.js)))
            .pipe(gulp.dest(config.root));
    });


    /**!
     * styles: generate the css from scss files
     */
    gulp.task('styles', function(){
        var minifyCSS = require('gulp-minify-css');
        var autoprefixer = require('gulp-autoprefixer');

        return gulp.src(config.scss + '/**/*.scss')
            .pipe($.sass())
            .pipe(minifyCSS())
            .pipe(autoprefixer('last 2 versions', 'ie 10', 'firefox', 'safari'))
            .pipe(gulp.dest(config.css));

    });


    /**!
     * cache-partials: building partials cache
     */
    gulp.task('cache-partials', function () {
        return gulp.src(
            [
                '!'+ config.index,
                config.templates + '/**/*.html'
            ]
        ).pipe($.htmlmin({
            collapseWhitespace: true,
            maxLineLength     : 120,
            removeComments    : true
        }))
            .pipe($.angularTemplatecache('sc-partials-tpls-cached.js', {
                module: 'sc.core',
                root  : 'sc'
            }))
            .pipe(gulp.dest(config.js + '/partial-cache'));
    });


    /**!
     * clean: Clean function deletes all the files in path
     * @param path
     */
    function clean(path) {
        log('cleaning: ' + $.util.colors.blue(path));

        /**!
         * del returns a promise and you should call .then(done)
         * to get it called after the del finishes.
         **/
        return del(path);
    }

    /**!
     * log: log function logs the message
     * @param message
     */
    function log(message) {
        if (typeof(message) === 'object') {
            for (var key in message) {
                if (message.hasOwnProperty(key)) {
                    gutil.log($.util.colors.blue(message[key]));
                }
            }
        } else {
            $.util.log($.util.colors.blue(message));
        }

    }
    
    

})();