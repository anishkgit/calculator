$(document).ready(function(){
  $(".key").click(function(){
    $("#screen").val($("#screen").val() + $(this).val());
  });
  $("#eql").click(function(){
    $("#screen").val(eval($("#screen").val()));
  });
  $("#clr").click(function(){
    $("#screen").val("");
  });
});
