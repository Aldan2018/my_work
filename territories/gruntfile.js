module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['dest/js/src/*.js'],
      dest: 'dest/js/built.js',
    },
  },
  uglify: {
    my_target: {
      files: {
        'built/built.min.js': ['dest/js/built.js']
      }
    }
  },
  sass: {
    dist: {
      files: {
        'dest/styles/main.css': 'dest/styles/style.scss'
      }
    }
  },
  cssmin: {
    target: {
      files: [{
        expand: true,
        cwd: 'dest/styles',
        src: ['*.css', '!*.min.css'],
        dest: 'built',
        ext: '.min.css'
      }]
    }
  },
  watch: {
    concat: {
      files: 'dest/js/*.js',
      tasks: ['concat']
    },
    uglify: {
      files: 'dest/js/built.js',
      tasks: ['uglify']
    },
    sass: {
      files: 'dest/styles/style.scss',
      tasks: ['sass']
    },
    cssmin: {
      files: 'dest/styles/main.css',
      tasks: ['cssmin']
    },
  }
});


  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'cssmin']);

};
