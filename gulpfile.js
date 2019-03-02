/**
 * requirements
 */

/** Basic * */
const gulp = require("gulp");
const browserSync = require("browser-sync");

/** HTML * */
const htmlclean = require("gulp-htmlclean");

/** JS * */
const uglify = require("gulp-uglify");
const minify = require('gulp-minify');
const terser = require('gulp-terser');

/** postCSS * */
const postcss = require("gulp-postcss");
const sass = require("gulp-sass");
const autoprefixer = require("autoprefixer");
const cssnano = require("gulp-cssnano");

/** SVGs * */
const svgSprite = require("gulp-svg-sprite");
const svg2Png = require('gulp-svg2png');

/** utilities * */
const sourcemaps = require("gulp-sourcemaps");
const changed = require("gulp-changed");
const plumber = require("gulp-plumber");
const concat = require("gulp-concat");




/*
 * settings
 */

const basePath = {
  src: "src/",
  dest: "public/"
};
const src = {
  icons:`${basePath.src}icons/`,
  img: `${basePath.src}img/`,
  html: `${basePath.src}html/`,
  js: `${basePath.src}js/`,
  css: `${basePath.src}postcss/`
};
const dest = {
  icons:`${basePath.dest}icons/`,
  img: `${basePath.dest}img/`,
  html: `${basePath.src}html/`,
  js: `${basePath.dest}js/`,
  css: `${basePath.dest}css/`
};
const svgConfig = {
  mode: {
    css: {
      // Activate the «css» mode
      render: {
        css: true // Activate CSS output (with default options)
      }
    }
  }
};
const reload = browserSync.reload;



/*
 * sub tasks
 */

gulp.task("browser-sync", () => {
  browserSync.init({
    port: 3071,
    server: {
      baseDir: basePath.dest
    }
  });

  gulp.watch(`${basePath.src}**/*`, gulp.series('make:html'));
  gulp.watch(`${src.js}**/*.js`, gulp.series('make:js')).on("change", reload);
  gulp.watch(`${src.css}**/*.scss`, gulp.series('make:css'));
});
gulp.task("make:html", () => {
  return gulp.src(`${basePath.src}**/*.html`)
    .pipi(plumber())
    .pipe(changed(`${basePath.src}**/*.html`))
    .pipe(htmlclean())
    .pipe(gulp.dest(basePath.dest))
    .pipe(browserSync.stream());
});
gulp.task("make:js", () => {
  return gulp.src(`${src.js}**/*.js`)
    .pipi(plumber())
    .pipe(changed(`${src.js}**/*.js`))
    .pipe(sourcemaps.init())
    .pipe(concat("main.min.js"))
    .pipe(terser())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dest.js))
});
gulp.task("make:css", () => {
  let plugins = [autoprefixer({ browsers: ["last 2 versions"] })];
  return gulp.src(`${src.css}**/*.scss`)
    .pipi(plumber())
    .pipe(changed(`${src.css}**/*.scss`))
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss(plugins))
    .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dest.css))
    .pipe(browserSync.stream())
});
gulp.task("make:svg-sprite", () => {
    return gulp.src(`${src.icons}**/*.svg`)
    .pipi(plumber())
    .pipe(svgSprite(svgConfig))
    .pipe(gulp.dest(dest.icons));
});
gulp.task('svg2png', () => {
    return gulp.src('./specs/assets/**/*.svg')
    .pipi(plumber())
    .pipe(svg2png())
    .pipe(gulp.dest('./build'));
})



/*
 * main tasks
 */

gulp.task('default', gulp.series('browser-sync', 'make:html', 'make:css', 'make:js', 'make:svg-sprite'))