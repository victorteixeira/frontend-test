module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			sass: {
				files: ['public/stylesheets/sass/*.scss'],
				tasks: ['sass'],
			}
		},

		sass: {
			dist: {
				files: {
					'public/stylesheets/style.css' : 'public/stylesheets/sass/style.scss'
				}
			}
		}

		// Minify CSS / JS / HTML
		// ....

	});


	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['sass']);
}