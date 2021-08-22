$(document).ready(function(){
    $(".about-small-text").hide();
    $(".about-small-header").show();

    $('.about-small-header').click(function(){
      var btnId = $(this).data('id');
      $(".about-small-text[data-id=" + btnId + "]").slideToggle();
    });
});
