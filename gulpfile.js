gulp.task("ejs", function() {
    gulp.src(
        ["app/dev/ejs/**/*.ejs",'!' + "app/dev/ejs/**/_*.ejs"] //注1
    )
        .pipe(ejs())
        .pipe(gulp.dest("app/public")) //注2
});
