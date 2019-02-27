/**
 * requirements
 */


/** Basic * */
const gulp = require("gulp");
const browserSync = require("browser-sync");

/** HTML * */
const htmlclean = require("gulp-htmlclean");

/** postCss * */
const postcss = require("gulp-postcss");
const sass = require("gulp-sass");
const autoprefixer = require("autoprefixer");

/** SVGs * */
const svgSprite = require("gulp-svg-sprite");

/** utilities * */
const sourcemaps = require("gulp-sourcemaps");
const changed = require("gulp-changed");
const plumber = require("gulp-plumber");
const concat = require("gulp-concat");
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify");


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
  js: `${basePath.src}js/`,
  css: `${basePath.src}postcss/`
};

const dest = {
  icons:`${basePath.dest}icons/`,
  img: `${basePath.dest}img/`,
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
});
gulp.task("make:html", () => {
  return gulp.src(`${basePath.src}**/*.html`)
    .pipe(changed(`${basePath.src}**/*.html`))
    .pipe(htmlclean())
    .pipe(gulp.dest(basePath.dest));
});
gulp.task("make:js", () => {
  return gulp.src(`${src.js}**/*.js`)
    .pipe(changed(`${src.js}**/*.js`))
    .pipe(sourcemaps.init())
    .pipe(concat("main.min.js"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dest.js));
});

gulp.task("make:css", () => {
  let plugins = [autoprefixer({ browsers: ["last 2 versions"] })];
  return gulp.src(`${src.css}**/*.scss`)
    .pipe(changed(`${src.css}**/*.scss`))
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dest.css));
});

gulp.task("make:svg-sprite", () => {
    return gulp.src(`${src.icons}**/*.svg`)
    .pipe(svgSprite(svgConfig))
    .pipe(gulp.dest(dest.icons));
});


/*
 * main tasks
 */

gulp.task("default", ["browser-sync", "make:html", "make:js", "make:css"]);
