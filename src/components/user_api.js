// add user api

var settings = {
  url: "ratingbackend.reapit.in/delivery_gods/add_user",
  method: "POST",
  timeout: 0,
  headers: {
    "Content-Type": "application/json",
  },
  data: JSON.stringify({ phone_number: 3333 }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

// add fedback
var settings = {
  url: "ratingbackend.reapit.in/delivery_gods/add_feedback",
  method: "POST",
  timeout: 0,
  headers: {
    "Content-Type": "application/json",
  },
  data: JSON.stringify({
    phone_number: 3333,
    feedback_text: "xxx",
    rating: 4.5,
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
