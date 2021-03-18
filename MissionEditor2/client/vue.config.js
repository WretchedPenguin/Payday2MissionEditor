module.exports = {
    // Put this in the ASP.NET Core directory
    outputDir: "../wwwroot/app",
    pages: {
        index: "src/main.js"
    },
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/sass/_main.sass";`,
            },
        },
    },
};