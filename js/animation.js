$(document).ready(function(){
  $('#tweet-controls').hide();
  $('.tweet-compose').on('click', function(){
  $(this).css('height', '5em');
  $('#tweet-controls').show();

})


  $('.tweet-compose').on('keyup, keydown', function(){
    var len = $(this).val().length;
    $('#char-count').text(140 - len);
    var count = $('#char-count').text()
    console.log(count);

    if (count < 10 && count > 0){
      $('#char-count').css('color', 'red');
    }
    else {
      $('#char-count').css('color', 'black');
    }

    if (count < 0) {
      $('.button').prop('disabled', true);
    }
    else {
      $('.button').prop('disabled', false);
    }

  })

  $('#tweet-submit').click(function() {
			var newdiv1 = $('.tweet').eq(0).clone();

			//.find()
			newdiv1.find('.avatar').prop('src', 'img/alagoon.jpg');
			newdiv1.find('.fullname').text();
			newdiv1.find('.username').text();
			newdiv1.find(".tweet-text").text($('.tweet-compose').val());


			if ($('.tweet-compose').val().length <= 0) {
				alert("You cannot send a blank tweet!");
			}
       else {
				$('#stream').prepend(newdiv1);
			};

		});

    $('body').on('mouseenter', '.tweet', function() {
        $('.tweet-actions').css('display', 'block')
 			});
		$('body').on('mouseleave', '.tweet', function() {
 			$('.tweet-actions').css('display', 'none')

})

      $('.tweet').on('click', function(){
        $('.stats').animation({
             left: '250px',
             opacity: '0.5',
             height: '150px',
             width: '150px',
             display: 'block'
         });
      });





});
