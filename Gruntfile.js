module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-nightwatch');
  grunt.loadNpmTasks('grunt-notify');

  grunt.initConfig({
    concurrent: {
      target: {
        tasks: ['nodemon'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    nodemon: {
      dev: {
        script: 'index.js',
        options: {
          nodeArgs: ['--harmony']
        }
      }
    },
    nightwatch: {
      options: {
      }
    }
  });

  grunt.registerTask('default', ['concurrent:target']);
  grunt.registerTask('test', ['nightwatch']);
};
