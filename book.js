$("#time-table-div").hide();

$(".next").click(function()
{
  var text = this.innerHTML;
  $("#time-table-div").show();
  $("#time-table-title").html("Feburary/"+text);
});


$("#btn-book").click(function()
{
  var r = confirm("확인을 누르시면 예약이 완료됩니다.")
  if(r==true)
    window.location.href = "filter.html";
});
