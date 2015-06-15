/**
 * Created by andersor on 6/14/15.
 */

var gulp = require('gulp');
var babel = require('gulp-babel');
var jshint = require('gulp-jshint');
var del = require('del');


// this task cleans up all the generated files created by this build script

gulp.task('clean', function (cb) {
    del([
        // here we use a globbing pattern to match everything inside the `mobile` folder
        'dist/**/*'
   //     'dist',
        // we don't want to clean this file though so we negate the pattern
     //   '!dist/mobile/deploy.json'
    ], cb);
});

// transform jsx using babel

gulp.task('jsx', function() {

    gulp.src('./private/react/*.jsx')
        .pipe(babel())
        .pipe(gulp.dest('./dist/public/js/react',{ext: '.js'}))

});

gulp.task('jshint',  function() {

    gulp.src('./dist/public/js/react/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter("default", {verbose: false}))
        .pipe(jshint.reporter("fail"));

});



// transform jsx using babel

gulp.task('es6', function() {

    gulp.src('./private/es6/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist/public/js/es6',{ext: '.js'}))

});

// transform jsx using babel

gulp.task('v_react', function() {

    gulp.src('./bower_components/react/*.js')
        .pipe(gulp.dest('./dist/public/js/vendors/react',{ext: '.js'}))

});

gulp.task('watch', function() {

    // Watch .scss files
    gulp.watch('./private/react/*.jsx', ['jsx']);

    // Watch .js files
  //  gulp.watch('src/scripts/**/*.js', ['scripts']);

    // Watch image files
    //gulp.watch('src/images/**/*', ['images']);

});


gulp.task('default', ['jsx','es6', 'v_react'], function() {

    // place code for your default task here
});