//send otp
//replace phone number in URL
var settings = {
    "url": "https://api.msg91.com/api/v5/otp?authkey=130764Adagc1lyUY5f54c6bbP1&template_id=5e713062d6fc052d9b0abeb4&mobile="+ "9741858689" +"&invisible=1",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

//verify otp  
//replace phone number and otp in URL

var settings = {
  "async": true,

  "crossDomain": true,

  "url": "https://api.msg91.com/api/v5/otp/verify?mobile=%24 "+ "9741858689" +"&otp=%24" + "1730" + "&authkey=%24"+"130764Adagc1lyUY5f54c6bbP1var",
  "method": "POST",
  "headers": {}
}

$.ajax(settings).done(function (response) {
  console.log(response);
});