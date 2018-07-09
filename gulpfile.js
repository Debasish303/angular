var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
gulp.task('sass', function() {
    return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
gulp.task('js', function() {
    return gulp.src('app/*.js')           // #1. select all js files in the app folder
    .pipe(babel({ presets: ['es2015'] }))    // #3. transpile ES2015 to ES5 using ES2015 preset
    .pipe(gulp.dest('build'));               // #4. copy the results to the build folder
});
gulp.task('watch', function() {
    //gulp.watch('js/*.js', ['scripts']);
    gulp.watch('sass/*.scss', ['sass']);
    gulp.watch('app/*.js', ['js']);
});