$(document).ready(function() {
  $('.item').hover(
    function(){
      $(this).find('img').animate({'padding':'0px'},100);
    },
    function(){
      $(this).find('img').css('padding','5px');
    }
  );


});