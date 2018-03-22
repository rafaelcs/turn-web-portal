module.exports = function(grunt) {
    
    // Project configuration.
    grunt.initConfig({
        eslint : {
           src: ["tests/API/spec/*.js"]
        },
        mochacli : {
           all: {
           options: {
                reporter: 'spec',
                captureFile: './build/reports/mocha/xunit.xml',
                timeout: 600000
                },
                src: ['tests/API/spec/*.js']
            }
        }      
    });  

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-mocha-cli');
    grunt.loadNpmTasks("gruntify-eslint");
    grunt.loadNpmTasks('grunt-eslint');

    // Tasks
    grunt.registerTask("apiTests", ["mochacli:all"]);
    grunt.registerTask('default', ['build']);
};
