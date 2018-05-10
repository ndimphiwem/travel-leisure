var gulp = require('gulp'),
    wait = require('gulp-wait')
sass = require('gulp-sass')
sourcemaps = require('gulp-sourcemaps');


//var prefix = require('gulp-autoprefixer');
//var minifycss = require('gulp-minify-css');
//var uglify = require('gulp-uglify');
//var svgmin = require('gulp-svgmin');
//var imagemin = require('gulp-imagemin');

// Stats and Things
//var size = require('gulp-size');

gulp.task('sass', function () {
    gulp.src('./assets/sass/style.scss')
        .pipe(wait(500))
        .pipe(sourcemaps.init())
        .pipe(sass({
            // includePaths: ['./dev/sass'],
            outputStyle: 'expanded'
        }))
        // .pipe(prefix(
        //     "last 1 version", "> 1%", "ie 8", "ie 7"
        // ))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./assets/css/'));
    //.pipe(minifycss())
    // .pipe(gulp.dest('./prod/css'));
});

// gulp.task('uglify', function() {
//     gulp.src('./dev/js/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('./prod/js'));
// });

// gulp.task('svgmin', function() {
//     gulp.src('./dev/img/svg/*.svg')
//         .pipe(svgmin())
//         .pipe(gulp.dest('./dev/img/svg'))
//         .pipe(gulp.dest('./prod/img/svg'));
// });

// gulp.task('imagemin', function() {
//     gulp.src('./dev/img/**/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('./dev/img'))
//         .pipe(gulp.dest('./prod/img'));
// });

// Stats and Things
// gulp.task('stats', function() {
//     gulp.src('./prod/**/*')
//         .pipe(size())
//         .pipe(gulp.dest('./prod'));
// });

//

gulp.task('default', function () {

    gulp.watch("./assets/sass/**/*.scss", function (event) {
        gulp.run('sass');
    });

    // gulp.watch("./dev/js/**/*.js", function(event) {
    //     gulp.run('uglify');
    // });

    // gulp.watch("./dev/img/**/*", function(event) {
    //     gulp.run('imagemin');
    //     gulp.run('svgmin');
    // });
});