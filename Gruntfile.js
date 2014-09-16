module.exports = function (grunt) {
 
        // Project configuration.
        grunt.initConfig({
                pkg: grunt.file.readJSON('package.json'),
                compass: {
                        dev: {
                                options: {
                                        sassDir: 'sass',
                                        cssDir: 'css'
                                }
                        }
                }
        });
 
        // Load the plugin that provides the "uglify" task.
        grunt.loadNpmTasks('grunt-contrib-compass');
 
        // Default task(s).
        grunt.registerTask('default', ['compass']);
 
};