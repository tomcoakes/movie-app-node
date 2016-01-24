module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-nightwatch');

  grunt.initConfig({
    concurrent: {
      target: {
        tasks: ['nodemon', 'nightwatch'],
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

  grunt.registerTask('features', ['nodemon', 'nightwatch']);
  grunt.registerTask('default', ['concurrent:target']);
};
