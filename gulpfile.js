const argv = require('yargs');
const gulp = require('gulp');
const rename = require('gulp-rename');

const localConfig = {
    src: './*.js',
    services: './app/services/*',
    dest: './dist',
    destServices: 'dist/app/services',
    config: './config/config.prod.js'
};

gulp.task('src', () =>
    gulp.src(localConfig.src).pipe(gulp.dest(localConfig.dest))
);

gulp.task('services', () =>
    gulp.src(localConfig.services).pipe(gulp.dest(localConfig.destServices))
);

gulp.src(localConfig.config).pipe(rename('./config/config.js')).pipe(gulp.dest(localConfig.dest));

gulp.task('build', ['src', 'services']);