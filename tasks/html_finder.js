/*
 * grunt-html-finder
 * https://github.com/danjuls/grunt-html-finder
 *
 * Copyright (c) 2014 Daniel Andréasson
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('html_finder', 'The best Grunt plugin ever.', function () {
    
    var fs = require('fs');

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      
    });

    // Set the variables
    var files = grunt.file.expand(this.filesSrc),
        placeHolder,
        result;

    var clean = [];
        
    // Set the regexp to loose the dir name
    var regex = '\/(.*)';
        
    if (options.reset) {
        grunt.file.write(options.filename, '{}');
    }
        

    // Iterate over all specified file groups.
    // this.files.forEach(function (file) {
      
      // Warn on and remove invalid source files (if nonull was set).
      // if (!grunt.file.exists(file)) {
      //   grunt.log.warn('Source file "' + file + '" not found.');
      //   return false;
      // } else {
      //   return true;
      // }
      // var src = file(function (src) {
      //   // Warn on and remove invalid source files (if nonull was set).
      //   if (!grunt.file.exists(src)) {
      //     grunt.log.warn('Source file "' + src + '" not found.');
      //     return false;
      //   } else {
      //     return true;
      //   }
      // });
      
      files.forEach(function(item) { 
        result = item.match(regex);
        clean.push(result[1]);
      });

      // Write the destination file.
      grunt.file.write(options.filename, JSON.stringify(clean, null, 4));
      // Print a success message.
      grunt.log.writeln('File "' + options.filename + '" created.');
    // });
  });

};
