$(document).ready(function(){
  $("#futuramaCharacter").submit(function(event) {

    $("#survey").addClass("hidden");

    if ($('input[name=character]:checked').length > 0) {
      $('#valid').removeClass("hidden");
    }
    else {
      $('#invalid').removeClass("hidden");
    }

    return false;
  });
});

