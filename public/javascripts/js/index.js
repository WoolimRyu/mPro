$(document).ready(function() {
	$("#submit").click(function() {

		alert('submit');

		var form_data = {
			user_id: $("#uId").val(),
			user_pw: $("#uPassword").val(),
			is_ajax: 1
		};
		$.ajax({
			type: "POST",
			url: '/login',
			data: form_data,
			success: function(response) {
				if(response == 'success') {
					alert('로그인 성공!');
				}
				else {
					alert('로그인 실패!');
				}
			}
		});
		return false;
	});

	$(".text").click(function() {
		
		var user_token = {
			token: $("#user_token").val()
		};

		alert(user_token.token);

		$.ajax({
			type: "POST",
			url: '/token',
			data: user_token,
			success: function(response) {
			}
		});
		//return false;
	});
});

$(window).scroll(function(event){

  var yOffset = window.pageYOffset;
  var breakpoint = 50;
  if (yOffset > breakpoint){
    $("nav ul").addClass('active');
  }else{
    $("nav ul").removeClass('active');
  }

});