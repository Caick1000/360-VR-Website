/* eslint-disable */

// Create instance
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const useref = require('gulp-useref');
const uglify = require('gulp-uglify-es').default;
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const runSequence = require('run-sequence');
const del = require('del');

var scssFiles = './src/scss/**/*.scss';

var cssDest = './src/css/';

var htmlSrc = './src/*.html';

var imageSrc = 'src/images/**/*.+(png|jpg|gif|svg)';
var imageDest = 'dist/images';

var prodDest = 'dist';

var sassDevOptions = {
	outputStyle: 'expanded'
};

gulp.task('sassdev', function () {
	return gulp.src(scssFiles)
		.pipe(sass(sassDevOptions).on('error', sass.logError))
		.pipe(gulp.dest(cssDest))
		.pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('misc', function () {
	return gulp.src('./src/*.json')
		.pipe(gulp.dest('dist/'))
});

gulp.task('watch', function () {
	gulp.watch(scssFiles, ['sassdev']);
});

gulp.task('browserSync', () => {
	browserSync.init({
		injectChanges: true,
		server: {
			baseDir: './src'
		}
	});
});

gulp.task('useref', function () {
	gulp.src(htmlSrc)
		.pipe(useref({searchPath:['./src', '']}))
		.pipe(gulpIf('*.js', uglify().on('error', function(e){
			console.log(e);
		 })))
		.pipe(gulpIf('*.css', cssnano()))
		.pipe(gulp.dest('dist/'));
});

gulp.task('images', function () {
	return gulp.src(imageSrc)
		.pipe(cache(imagemin()))
		.pipe(gulp.dest(imageDest));
});

gulp.task('clean:dist', function () {
	return del.sync(prodDest);
});

gulp.task('default', function (callback) {
	runSequence(['sassdev', 'browserSync', 'watch'], callback)
});

gulp.task('build', function (callback) {
	runSequence('clean:dist', ['misc', 'useref', 'images'], callback)
});