$(document).ready(function(){
  $("#get_color").on("click", function(e){
    $.ajax({
      url: '/color',
      type: "POST",
      dataType: "json",
      success: function(result){
        change_color(result.cell, result.color);
      }
    });
  });

  function change_color(cell, color){
    $("#color_me li:nth-child("+cell+")").css("background-color", color);
  };
});
