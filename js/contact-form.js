function postToGoogle() {
  var firstLast = document.forms[0].elements.firstLast.value;
  var email = document.forms[0].elements.email.value;
  var msg = document.forms[0].elements.msg.value;


  $.ajax({
    url: "https://docs.google.com/forms/d/1y02nats9TpXqSbFwDAaD28-mlo_1yOmezU0zqNQXIeU/formResponse",
    data: {
      "entry.377736812": firstLast,
      "entry.921748585": email,
      "entry.1932077344": msg
    },
    type: "POST",
    dataType: "json",
    statusCode: {
      0: function() {
        window.location.replace("../thank-you.html");
      },
      200: function() {
        window.location.replace("../thank-you.html");
      }
    }
  });
}

var submit = document.forms[0].elements.submit;

submit.addEventListener("click", function() {
  event.preventDefault();
  postToGoogle();
}, false);
