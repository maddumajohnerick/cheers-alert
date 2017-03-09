'use strict'

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mochaTest: {
      src: ['test/*.js'],
      test: {
        options: {
          reporter: 'spec',
        },
      },
    },
    browserify: {
      client: {
        src: ['src/index.js'],
        dest: 'dist/cheers-alert.js',
        options: {
          browserifyOptions: {
            standalone: 'cheers',
          },
        },
      },
    },
    uglify: {
      options: {
        banner: '/* <%= pkg.name %> <%= pkg.version %> */',
      },
      build: {
        src: 'dist/cheers-alert.js',
        dest: 'dist/<%= pkg.name %>.min.js',
      },
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['*.css', '!*.min.css'],
          dest: 'dist',
          ext: '.min.css',
        }],
      },
    },
  });

  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['mochaTest', 'browserify', 'uglify', 'cssmin']);
}
