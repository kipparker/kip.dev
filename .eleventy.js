module.exports = function (config) {
    config.addPassthroughCopy({ './src/_includes/css/*.css': 'css/' })

    return {
        dir: {
            input: './src',
            output: './build'
        }
    }
}