$(window).scroll(function(event){

  var yOffset = window.pageYOffset;
  var breakpoint = 50;
  if (yOffset > breakpoint){
    $("nav ul").addClass('active');
  }else{
    $("nav ul").removeClass('active');
  }

});