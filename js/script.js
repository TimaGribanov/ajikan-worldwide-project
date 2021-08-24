$(document).ready(function(){
    $('.about-small-header').click(function(){
      var btnId = $(this).data('id');
      $('.about-small-text[data-id=' + btnId + ']').slideToggle();

      var attribute = $('.about-small-header[data-id=' + btnId + ']').attr('class');
      if (attribute.indexOf('rounded-bottom') >= 0) {
        attribute = attribute.replace('rounded-bottom','');
      } else {
        attribute = attribute + ' rounded-bottom';
      }
      $('.about-small-header[data-id=' + btnId + ']').attr('class', attribute);
    });
});
