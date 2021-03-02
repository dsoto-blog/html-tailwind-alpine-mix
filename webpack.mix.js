// 

let mix = require('laravel-mix');

mix.js("src/app.js", "public/js")
    .postCss("src/app.css", "public/css", [
        require("tailwindcss"),
    ]);

mix.browserSync({
    watch: true,
    server: './public',
    proxy: null,
});    
