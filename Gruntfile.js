module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('_public/package.json'),
    nodewebkit: {
      options: {
        version: "0.9.2",
        build_dir: './dist',
        mac_icns: './icons/nw.icns',
        // specifiy what to build
        mac: true,
        win: true,
        linux32: false,
        linux64: true 
      },
      src: './_public/**/*'
    }
  });

  grunt.loadNpmTasks('grunt-node-webkit-builder');

  grunt.registerTask('default', ['nodewebkit']);
};
