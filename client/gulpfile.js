var project_name = require('./package.json').name;
var gulp = require('gulp');
var sass = require('gulp-sass');
var flatten = require('gulp-flatten');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require("vinyl-source-stream");
var glob = require('glob');
var es = require('event-stream');
var imagemin = require('gulp-imagemin');
var eslint = require('gulp-eslint');
var sassLint = require('gulp-sass-lint');

gulp.task('sass:lint', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError(1))
});

gulp.task('sass:compile', ['sass:lint'], function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(flatten())
    .pipe(gulp.dest(`../${project_name}/static/css`));
});

gulp.task('sass:watch', ['sass:compile'], function () {
  gulp.watch('./src/**/*.scss', ['sass:compile']);
});


gulp.task('js:lint', () => {
    return gulp.src(['./src/app/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError(1));
});

gulp.task('js:compile', ['js:lint'], function(done) {
    glob('./src/app/*.js', function(err, files) {
        if(err) done(err);

        var tasks = files.map(function(entry) {
          return browserify({
              entries: [entry]
          })
          .transform(babelify.configure({
              presets : ["es2015"]
          }))
          .bundle()
          .pipe(source(entry))
          .pipe(flatten())
          .pipe(gulp.dest(`../${project_name}/static/js`));
      })
    es.merge(tasks).on('end', done);
  });
});

gulp.task('js:watch', ['js:compile'], function() {
  gulp.watch('./src/app/**/*.js', ['js:compile']);
});

gulp.task('img', function() {
  gulp.src('./src/static/img/**/*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(gulp.dest(`../${project_name}/static/img`));
});


gulp.task('watch', ['sass:watch', 'js:watch', 'img']);

gulp.task('default', ['sass:compile', 'js:compile', 'img']);
