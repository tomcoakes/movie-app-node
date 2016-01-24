module.exports = function(grunt) {

  grunt.initConfig({
    nodemon: {
      dev: {
        script: 'index.js',
        options: {
          nodeArgs: ['--harmony']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('default', 'nodemon');
};
