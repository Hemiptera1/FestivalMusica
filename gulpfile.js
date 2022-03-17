const { src, dest, watch, parallel } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const plumber = require('gulp-plumber')

// IMAGENES
const webp = require('gulp-webp')
const cache = require('gulp-cache')

function css(callback){
    src('src/scss/**/*.scss')
        .pipe( plumber() )
        .pipe( sass() )
        .pipe( dest('build/css') )
    callback()
}

function convertirWebp(callback){
    const opciones = {
        quality: 50
    }
    src('src/img/**/*.{jpg,png}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'))
    callback()
}

function dev(callback){
    watch('src/scss/**/*.scss', css)
    callback()
}

exports.css = css
exports.convertirWebp = webp
exports.dev = parallel(convertirWebp, dev)