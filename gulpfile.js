var gulp 		 = require('gulp'),
	imagemin 	 = require('gulp-imagemin'),
	server 		 = require('gulp-server-livereload'),
	// js
	concat 		 = require('gulp-concat'),
	uglyfly 	 = require('gulp-uglyfly'),
	// css
	autoprefixer = require('gulp-autoprefixer'),
	concatCss 	 = require('gulp-concat-css'),
	cleanCSS 	 = require('gulp-clean-css');

// WATCH**
// gulp.task('watch', ['css:watch', 'js:watch']);
// CSS***
gulp.task('cssTask', function () {
  return gulp.src('app/css/**/*.css')
    .pipe(concatCss("styles/bundle.css"))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('dist/'));

});
// gulp.task('css:watch', function () {
//     gulp.watch('app/css/**/*.css', ['cssTask']);
// });
// JS***
gulp.task('jsTask', function () {
  return gulp.src('app/js/**/*.js')
    .pipe(concat("scripts/bundle.js"))
    .pipe(uglyfly())
    .pipe(gulp.dest('dist/'));
});
// gulp.task('js:watch', function () {
//     gulp.watch('app/js/**/*.js', ['jsTask']);
// });
// IMG**
gulp.task('imgTask', () =>
    gulp.src('app/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);
// LIVERELOAD**
gulp.task('liveTask', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      defaultFile: 'index.html',
      directoryListing: false,
      open: false
    }));
});
