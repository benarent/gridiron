module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

   // Re-usable filesystem paths (these shouldn't be modified)
    paths: {
      src:        'src',
      src_img:    'src/img',
      dist:       'dist',
      dist_img:   'dist/img'
    },

    connect: {
      server: {
        options: {
          port: 9001,
          base: 'src',
          livereload: true
        }
      }
    },

    watch: {
      options: {
      livereload: true,
      },
      html: {
        files: ['src/index.html']
      },
      css: {
        files: [
          '<%= paths.src %>/css/*.css'
        ],
        tasks: ['default']
      },
      js: {
        files: [
          'assets/js/*.js',
          'Gruntfile.js'
        ],

      }
    },
   
  });

  // Load the Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Register the default tasks.
  grunt.registerTask('default', ['connect', 'watch']);
};