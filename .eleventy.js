module.exports = function (config) {
    config.addPassthroughCopy({ './src/_includes/css/*.css': 'css/', './src/_includes/favicon/*.*': 'favicon/' })

    return {
        dir: {
            input: './src',
            output: './build'
        }
    }
}