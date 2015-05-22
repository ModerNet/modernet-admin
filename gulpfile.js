/// <binding Clean='clean' />

var gulp = require("gulp"),
  rimraf = require("rimraf"),
  fs = require("fs");

var paths = {
    bower: "./bower_components/",
    lib: "./src/lib/"
};

gulp.task('default', ['copy']);

gulp.task("clean", function (cb) {
    rimraf(paths.lib, cb);
});

gulp.task("copy", ["clean"], function () {
    var bower = {
        "bootstrap": "bootstrap/dist/**/*.{js,map,css,ttf,svg,woff,eot}",
        "jquery": "jquery/jquery*.{js,map}",
        "angular": "angular/angular*.{js,map}",
        "angular-route": "angular-route/angular-route*.{js,map}"
    };

    for (var destinationDir in bower) {
        gulp.src(paths.bower + bower[destinationDir])
          .pipe(gulp.dest(paths.lib + destinationDir));
    }
});