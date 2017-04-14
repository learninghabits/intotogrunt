module.exports = function (grunt) {
    grunt.initConfig({
        ember_handlebars: {
            compile: {
                options: {
                    processName: function (sourceFile) {                        
                        return sourceFile.replace("js/views/", "")
                                          .replace(".handlebars", "");
                    }
                },
                files: {
                    "js/views/indexview.template.js":
                                    "js/views/indexview.handlebars",
                    "js/views/applicationview.template.js":
                                    "js/views/applicationview.handlebars"
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-ember-handlebars');
    grunt.registerTask('default', ['ember_handlebars']);
}
