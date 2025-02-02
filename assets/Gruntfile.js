module.exports = function(grunt){

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

	// Concatenate Configuration
	concat: {
		options: {
			separator: ';'
		},
		script: {
			src: [
				'dist/js/script.js'
			],
			dest: '../markup/js/script.min.js'
		}
	},

	// Uglify Configuration
	uglify: {
		dist: {
			files: {
				'../markup/js/jquery.min.js': ['dist/js/plugin/jquery.js'],
				'../markup/js/jquery.mask.min.js': ['dist/js/plugin/jquery.mask.js'],
				'../markup/js/slick.min.js': ['dist/js/plugin/slick.js'],
				'../markup/js/stars.min.js': ['dist/js/plugin/stars.js'],
				'../markup/js/jquery.mCustomScrollbar.min.js': ['dist/js/plugin/jquery.mCustomScrollbar.js'],
				'../markup/js/jcf.min.js': ['dist/js/plugin/jcf.js'],
				'../markup/js/jcf.number.min.js': ['dist/js/plugin/jcf.number.js'],
				'../markup/js/jcf.scrollable.min.js': ['dist/js/plugin/jcf.scrollable.js'],
				'../markup/js/jcf.select.min.js': ['dist/js/plugin/jcf.select.js'],
				'../markup/js/readmore.min.js': ['dist/js/plugin/readmore.js'],
				'../markup/js/jquery.matchHeight.min.js': ['dist/js/plugin/jquery.matchHeight.js'],
				'../markup/js/script.min.js': ['dist/js/script.js'],
				'../markup/js/home.min.js': ['dist/js/home.js'],
				'../markup/js/catalog.min.js': ['dist/js/catalog.js'],
				'../markup/js/product-page.min.js': ['dist/js/product-page.js'],
				'../markup/js/stocks.min.js': ['dist/js/stocks.js'],
				'../markup/js/about.min.js': ['dist/js/about.js'],
				'../markup/js/pay-delivery.min.js': ['dist/js/pay-delivery.js'],
				'../markup/js/wishlist.min.js': ['dist/js/wishlist.js'],
				'../markup/js/ingrediyenty.min.js': ['dist/js/ingrediyenty.js'],
				'../markup/js/contacts.min.js': ['dist/js/contacts.js'],
				'../markup/js/error.min.js': ['dist/js/error.js'],
				'../markup/js/certifications.min.js': ['dist/js/certifications.js'],
				'../markup/js/club.min.js': ['dist/js/club.js'],
				'../markup/js/reviews.min.js': ['dist/js/reviews.js'],
				'../markup/js/checkout.min.js': ['dist/js/checkout.js'],
				'../markup/js/login.min.js': ['dist/js/login.js'],
				'../markup/js/successfully.min.js': ['dist/js/successfully.js'],
			}
		}
	},

	// Sass Configuration
	sass: {
		options: {
			loadPath: ['bower_components/foundation/foundation.scss']
		},
		dist: {
			options: {
				sourcemap: 'none',
				style: 'compressed'
			},
			files: [{
				expand: true,
				cwd: 'dist/scss/',
				src: ['*.scss'],
				dest: '../markup/css/',
				ext: '.css'
			}]
		}
	},

	// Watch Configuration
	watch: {
		grunt: { files: ['Gruntfile.js'], tasks: ['default'] },

		sass: {
			files: 'dist/scss/*.scss',
			tasks: ['buildCss']
		},

		script: {
			files: 'dist/js/*.js',
			tasks: ['buildJs']
		},

		markup: {
			files: '*.html',
			tasks: ['htmlbuild']
		}
	},

	fixturesPath: './',
	sourcesPath: '../markup',

    htmlbuild: {
        dist: {
            src: '*.html',
            dest: '<%= sourcesPath %>/templates/',
            options: {
                beautify: true,
                prefix: '../',
                relative: false,
                sections: {
                    views: '<%= fixturesPath %>/*.html',
                    templates: '<%= fixturesPath %>/*.html',
                    layout: {
						seekers_header: '<%= fixturesPath %>/templates/seekers-header.html',
						header: '<%= fixturesPath %>/templates/header.html',
                    	footer: '<%= fixturesPath %>/templates/footer.html',
                    	seekers_footer: '<%= fixturesPath %>/templates/seekers-footer.html',
					}
                },
            }
        }
    }


});

// Load Grunt tasks
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-html-build');

// Register Grunt tasks
grunt.registerTask('buildCss', ['sass']);
grunt.registerTask('buildJs',  ['concat', 'uglify']);
grunt.registerTask('default',  ['buildCss', 'buildJs', 'watch', 'sass']);

}
