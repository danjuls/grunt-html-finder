/*!
 * HTML-Finder v 0.1
 * Author: Daniel Andréasson
 */
;(function($) {
	'use strict';
  
  var url = '/htmlfiles.json';
  $.getJSON(url, function(files) {
    writeToUser(files);

  });

  function writeToUser(files) {
    // var $div = $('</div>').attr('id', 'developer-menu').appendTo('body');
    $(document.body).append('<div id="developer-menu"><div class="dev-wrapper"><a href="#" class="show-hide">Show</a></div></div>');
    

    $.each(files,function(index, value){
     $('#developer-menu .dev-wrapper').append('<a href="'+value+'">'+value+'</a><br />');
      
    });
  }
  
})(jQuery);