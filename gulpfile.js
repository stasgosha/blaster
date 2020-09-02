var gulp			= require('gulp'),
	sass			= require('gulp-sass'),
	concat			= require('gulp-concat'),
	uglify			= require('gulp-uglifyjs'),
	autoprefixer	= require('gulp-autoprefixer'),
	babel			= require('gulp-babel'),
	sourcemaps		= require('gulp-sourcemaps'),
	browserSync		= require('browser-sync').create();


gulp.task('serve', function(done) {

	browserSync.init({
		server: "./"
	});

	gulp.watch("scss/**/*.scss", gulp.series('sass'));
	gulp.watch("js/scripts.js", gulp.series('js-watch'));
	gulp.watch("*.html").on('change', () => {
	  browserSync.reload();
	  done();
	});

	done();
});

// process JS files and return the stream.
gulp.task('js', function () {
	return gulp.src('js/scripts.js')
		.pipe(babel({ presets: ['@babel/env'] }))
		.pipe(concat('scripts-dist.js'))
		.pipe(uglify())
		.pipe(gulp.dest('js'));
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', gulp.series('js'), function (done) {
	browserSync.reload();
	done();
});


gulp.task('sass', function(done) {
	gulp.src("scss/**/*.scss")
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer(['last 15 versions', '> 1%'], {cascade: true}))
		.pipe(gulp.dest("css"))
		.pipe(browserSync.stream());

	done();
});


gulp.task('default', gulp.series('sass', 'js', 'serve'));