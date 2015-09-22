$(document).ready(function() {
  var menuButton = $('.menu-button');
  var menuLine = $('.menu-line');

   menuButton.mousedown(function() {
     menuLine.css('background-color', 'rgba(1, 1, 1, .7)');
   });
  
   menuButton.mouseup(function() {
     menuLine.css('background-color', 'rgba(1, 1, 1, .6)');
   });
  
  menuButton.click(function() {
    $('.menu-item.1').toggleClass('first');
    $('.menu-item.2').toggleClass('second');
    $('.menu-button > span').toggleClass('menu-line');
    $('.menu-button > span').toggleClass('activeB');
  });
});