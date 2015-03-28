var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
	//.pipe(livereload())
    return gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});

gulp.task('default', ['sass']);