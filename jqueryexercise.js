// var container = $('h1');
//
// console.log (container);

// var site_text = $('p');
//
// console.log (site_text);
//
// var html_body = $('h1')
// html_body.css('background-color', 'green');

var button = $('.color-change');
function changeColor(){
  $('.box').css('background-color','red');
}
//
$('.color-change').click(changeColor);
