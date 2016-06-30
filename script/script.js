
$(document).ready(function() {


  $('[data-toggle="tooltip"]').tooltip(); 

   $('#stat .onoffswitch-label').click( function(){  
     $('#charts').slideToggle("slow");
  });

   $('#comments .onoffswitch-label').click( function(){  
     $('#comment-wrap').slideToggle("slow");
  });

});





