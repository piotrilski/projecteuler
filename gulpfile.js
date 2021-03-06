var gulp = require('gulp');

var PATHS = {
    src: {
        js: 'src/**/*.ts',
        html: 'src/**/*.html'
    },
    lib: [
        'node_modules/angular2/node_modules/traceur/bin/traceur-runtime.js',
        'node_modules/angular2/bundles/angular2.min.js',
        'node_modules/angular2/bundles/router.dev.js',
        'node_modules/systemjs/dist/system-csp-production.js'
    ],
    typings: 'node_modules/angular2/bundles/typings/angular2/*.ts'
    
};

gulp.task('clean', function (done) {
    var del = require('del');
    del(['dist'], done);
});

gulp.task('js', function () {
    var typescript = require('gulp-typescript');
    var tsResult = gulp.src([PATHS.src.js, PATHS.typings])
        .pipe(typescript({
            noImplicitAny: true,
            module: 'system',
            target: 'ES5',
            emitDecoratorMetadata: true,
            experimentalDecorators: true
        }));

    return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('html', function () {
    return gulp.src(PATHS.src.html).pipe(gulp.dest('dist'));
});

gulp.task('libs', function () {
    return gulp.src(PATHS.lib).pipe(gulp.dest('dist/lib'));
});

gulp.task('serve', ['libs', 'html', 'js'], function () {
    var http = require('http');
    var connect = require('connect');
    var serveStatic = require('serve-static');
    var open = require('open');
    var modRewrite = require('connect-modrewrite');
    var port = 9000, app;

    gulp.watch(PATHS.src.html, ['html']);
    gulp.watch(PATHS.src.js, ['js']);

    app = connect()
        .use(modRewrite([
            '!\\.html|\\.js|\\.css|\\.png$ /index.html [L]'
        ]))
        .use(serveStatic(__dirname + '/dist'));
        
    http.createServer(app).listen(port, function () {
        open('http://localhost:' + port);
    });
});