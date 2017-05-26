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

$("#question-div").hover(function(){
  $("#question-info").html(`관심학원에 있는 두 학원을 비교해주는 기능입니다.<br/>
  오른쪽의 선택창에서 학원을 고르고, 면허를 고르면 비교할 수 있습니다.`)
  $("#question-info").show()
})
$("#question-div").mouseout(function(){
  $("#question-info").hide()
})
$("#question-type").hover(function(){
  $("#question-info").html(`면허 종류는 1종 대형, 1종 보통, 2종 보통, 2종 소형, 원동기가 있습니다.<br/>
  오늘쪽의 선택창에서 면허를 고르면, 학원의 정보를 볼 수 있습니다.`)
  $("#question-info").show()
})
$("#question-type").mouseout(function(){
  $("#question-info").hide()
})
$("#question-price").hover(function(){
  $("#question-info").html(`각 학원 면허를 따기위해서 드는 비용을 알려줍니다.<br/>
  1종 대형의 평균 가격 : 525,200원<br/>
  1종 보통의 평균 가격 : 475,200원<br/>
  2종 보통의 평균 가격 : 375,200원<br/>
  2종 소형의 평균 가격 : 329,200원<br/>
  원동기의 평균 가격 : 275,200원`)
  $("#question-info").show()
})
$("#question-price").mouseout(function(){
  $("#question-info").hide()
})
$("#question-star").hover(function(){
  $("#question-info").html(`해당 학원에서 수업을 들은 평균 평점입니다.`)
  $("#question-info").show()
})
$("#question-star").mouseout(function(){
  $("#question-info").hide()
})
$("#question-self").hover(function(){
  $("#question-info").html(`해당 학원에서 자체적으로 운전면허시험을 볼 수 있는지 확인할 수 있습니다.<br/>
    만약 자체적으로 볼 수 없는 경우 국가공인시험장에서 시험을 봐야합니다.`)
  $("#question-info").show()
})
$("#question-self").mouseout(function(){
  $("#question-info").hide()
})
