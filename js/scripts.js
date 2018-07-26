// $(document).ready(function() {
//   $("form#complaint").submit(function(event) {
//     event.preventDefault()
//     $("#name").empty(); // var userFeedback = $("input#message").val()
//     alert("Complaint booked successfully");
//     $("#complaint")[0].reset();
//   });
// });

$(document).ready(function() {
  $("form#subscribe").submit(function(event) {
    event.preventDefault()
    // var userFeedback = $("input#emailSub").val()
    alert("Successfully subscribed for new content");
    $("#subscribe")[0].reset();

  });
});
