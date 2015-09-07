module.exports = function(grunt) {

	grunt.initConfig({
		uglify: {
			all: {
				files: {
					'js/main.min.js': ['js/jquery.min.js', 'js/bootstrap.js', 'js/main.js' ]
				}
			}
		},
		cssmin: {
			all: {
				files: {
					'css/main.min.css': ['css/bootstrap.css', 'css/styles.css']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['uglify', 'cssmin']);
};
