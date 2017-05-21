var config = {
  apiKey: "AIzaSyApEs803NuXtJukZzsjBL7SKFqrMHjGjnI",
  authDomain: "cs492-test.firebaseapp.com",
  databaseURL: "https://cs492-test.firebaseio.com",
  projectId: "cs492-test",
  storageBucket: "cs492-test.appspot.com",
  messagingSenderId: "233920767382"
};

firebase.initializeApp(config);
var database = firebase.database()
var curRef = database.ref("cur/-Kkc7XDV06v9PcOdv5K-")
var bookRef = database.ref("book")
var curname = ''
var curprice = ''
var curtype = ''
curRef.once('value').then(function(snapshot)
{
  curname =  snapshot.val().name
  curprice = snapshot.val().price
  curtype = snapshot.val().type
})
$("#time-table-div").hide();

$(".available").click(function()
{
  var text = this.innerHTML;
  $("#time-table-div").show();
  $("#time-table-title").html("2017-05-"+text);
});
$(".time-table").click(function(){
  $(this).find("input").attr("checked", true);
})



$("#btn-book").click(function()
{
  var r = confirm("확인을 누르시면 예약이 완료됩니다.")
  if(r==true)
  {
    var selected_tr = $(':radio[name="group1"]:checked').parent().parent();
    if(selected_tr.length==0){
      alert("선택하지 않으셨습니다.");
      return
    }
    var tds = selected_tr.find("td");
    var date = $("#time-table-title").text();
    bookRef.push({
      name : curname,
      date : date,
      time : tds[1].innerText,
      price : curprice,
      type : curtype
    })
    window.location.href = "filter.html";
  }

});
