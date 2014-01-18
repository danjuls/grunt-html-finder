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
    $(document.body).append('<div id="developer-menu"></div>');
    
    $('#developer-menu').css({
      'font-size' : '10px',
      position: 'fixed',
      left: '.5rem',
      top: '4rem',
      'z-index': '9999',
    });

    $.each(files,function(index, value){
     $('#developer-menu').append('<a href="'+value+'">'+value+'</a><br />');
      
    });
  }

  $('#developer-menu .expand').on('click', function(e) {
    e.prevetDefault();
  });
    
  


})(jQuery);