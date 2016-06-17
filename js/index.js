$('#send').click(function(e) {
    $.ajax({
      url: "https://formspree.io/trotskaolena@gmail.com",  
      method: "POST",
       error: function () {
        $('#contactForm').html('<h1>Error!</h1>')
      },
      data: {
             email: email.value,
             message: message.value
             },
      dataType: "json"
  }).done(function() {
     $('#contactForm').html('<h1>Thank you!</h1>')
  });
  e.preventDefault();
});