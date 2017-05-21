var reservation_info = document.getElementById("reservation_info");

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
var bookRef = database.ref("book")

function bindcancel(){
  $('.cancel_reservation').click(function() {
      var result = confirm('정말 취소하시겠습니까?');
      if(result){
          var key = $(this).data('key');
          var newbookRef = database.ref("book/" + key);
          newbookRef.remove();
      }
  });
}

bookRef.on('value', function(snapshot){
  var books = snapshot.val()
  var childHTMLs = Object.keys(books).map(function(key){
    var data = books[key]
    return `<li>&rsaquo; <a href="#"><b>${data.name}</b></a> </li>
    <span style="line-height:1%"><br></span>
      <table>
          <tr>
              <td style="text-indent : 20px"><b>[상세 정보]</b></td>
              <td></td>
          </tr>
          <tr>
              <td style="text-indent : 20px">예약 시간 :</td>
              <td style="text-indent : 10px">${data.date} ${data.time}</td>
          </tr>
          <tr>
              <td style="text-indent : 20px">면허 종류 :</td>
              <td style="text-indent : 10px">${data.type}</td>
          </tr>
          <tr>
              <td style="text-indent : 20px">결제 금액 :</td>
              <td style="text-indent : 10px">${data.price}원</td>
          </tr>
          <tr>
              <td style="text-indent : 20px">학원 위치 :</td>
              <td style="text-indent : 10px">서울시 노원구 중계1동 204-317</td>
          </tr>
      </table>
    <span style="line-height:1%"><br></span>
    <input type="button" class="cancel_reservation" data-key="${key}" value = "예약 취소" style="margin-left : 20px">`
  })
  var childHTML = childHTMLs.join("")
  $("#reservation_info").empty()
  $("#reservation_info").append(childHTML)
  bindcancel();
})
