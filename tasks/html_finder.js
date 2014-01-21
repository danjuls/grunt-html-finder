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
    files.forEach(function(file) { 
      if (!grunt.file.exists(file)) {
        grunt.log.warn('Source file "' + file + '" not found.');
        return false;
      } else {
        result = file.match(regex);
        clean.push(result[1]);
        return true;
      }
    });
    
      
    // Write the destination file.
    grunt.file.write(options.dest + options.filename, JSON.stringify(clean, null, 4));
    if (!grunt.file.exists(options.dest + options.filename)) {
        grunt.log.warn('Write to "' + options.dest + '" failed');
        return false;
      }
    // Print a success message.
    grunt.log.writeln('File "' + options.filename + '" created.');
    
  });

};
