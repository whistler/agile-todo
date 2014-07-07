module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['www/js/**/*.js']
    },
    jsbeautifier : {
        files : ['www/js/**/*.js'],
        options : {
          'indent_size': 2,
          'indent_char': ' ',
          'indent_level': 0,
          'indent_with_tabs': false,
          'jslint_happy': true,
          'wrap_line_length': 80
        }
    },
    watch: {
      js: {
        files: ['www/js/**/*.js'],
        tasks: ['jshint', 'jsbeautifier']
      }
    }
  });

  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'jsbeautifier', 'watch']);

};