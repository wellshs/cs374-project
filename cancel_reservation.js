var reservation_info = document.getElementById("reservation_info");

var bookRef = database.ref("book")
var likeRef = database.ref("like")


function binddelete(){
  $('.delete-like').click(function() {
      var result = confirm('정말 삭제하시겠습니까?');
      if(result){
          var key = $(this).data('key');
          var newbookRef = database.ref("like/" + key);
          newbookRef.remove();
          $(this).parent().empty();
      }
  });
}

likeRef.once('value').then(function(snapshot){
  var likes = snapshot.val()
  var childHTMLs = Object.keys(likes).map(function(key){
    var data = likes[key]
    return `
    <li>&rsaquo;
      <a href="${data.url}"><b>${data.name}</b></a>
      <span style="line-height:2%"><br></span>
      <input type="button" class="delete-like" data-key="${key}" value = "삭제하기" style="margin-left : 20px"></input>
    </li>`
  })
  var childHTML = childHTMLs.join("")
  $("#like_info").empty()
  $("#like_info").append(childHTML)
  binddelete()
})



function bindcancel(){
  $('.cancel_reservation').click(function() {
      var result = confirm('정말 취소하시겠습니까?');
      if(result){
          var key = $(this).data('key');
          var newbookRef = database.ref("book/" + key);
          newbookRef.remove();
          $(this).parent().empty();
      }
  });
}

bookRef.on('value', function(snapshot){
  var books = snapshot.val()
  var childHTMLs = Object.keys(books).map(function(key){
    var data = books[key]
    return `<div>
    <li>&rsaquo; <a href="#"><b>${data.name}</b></a> </li>
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
    <input type="button" class="cancel_reservation" data-key="${key}" value = "예약 취소" style="margin-left : 20px"></input></div>`
  })
  var childHTML = childHTMLs.join("")
  $("#reservation_info").empty()
  $("#reservation_info").append(childHTML)
  bindcancel();
})
