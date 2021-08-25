//Check if mobile
let detectMobile = () => {
  const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
  ];

  return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
  });
}

//Adapt to mobile
if(detectMobile() === true) {
  $('head').append('<link rel="stylesheet" href="css/style_mobile.css">');
}
else {
  $('head').append('<link rel="stylesheet" href="css/style.css">');
}

//Open and close boxes in About us
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
