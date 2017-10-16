var reservation_info = document.getElementById("reservation_info");

var bookRef = database.ref("book")
var likeRef = database.ref("like")


var dbmypage = [
  {
    "name" : "A academy",
    "location" : "서울시 노원구",
    "real_location" : "서울시 노원구 중계1동 243-503",
    "type" : "1종 대형",
    "price" : 536000,
    "star" : 4.5,
    "url" : "A_academy.html"
  },
  {
    "name" : "B academy",
    "location" : "서울시 노원구",
    "real_location" : "서울시 노원구 상계동 127-311",
    "type" : "1종 대형",
    "price" : 570000,
    "star" : 4.0,
    "url" : "B_academy.html"
  },
  {
    "name" : "C academy",
    "location" : "서울시 노원구",
    "real_location" : "서울시 노원구 하계2동 307-256",
    "type" : "1종 대형",
    "price" : 470000,
    "star" : 3.0,
    "url" : "C_academy.html"
  },
  {
    "name" : "D academy",
    "location" : "서울시 노원구",
    "real_location" : "서울시 노원구 공릉동 139-804",
    "type" : "1종 대형",
    "price" : 500000,
    "star" : 2.0,
    "url" : "D_academy.html"
  },
  {
    "name" : "E academy",
    "location" : "서울시 노원구",
    "real_location" : "서울시 노원구 월계동 272-781",
    "type" : "1종 대형",
    "price" : 550000,
    "star" : 1.0,
    "url" : "E_academy.html"
  },
  {
    "name" : "A academy",
    "location" : "서울시 노원구",
    "real_location" : "서울시 노원구 중계1동 243-503",
    "type" : "1종 보통",
    "price" : 486000,
    "star" : 4.5,
    "url" : "A_academy.html"
  },
  {
    "name" : "B academy",
    "location" : "서울시 노원구",
    "real_location" : "서울시 노원구 상계동 127-311",
    "type" : "1종 보통",
    "price" : 520000,
    "star" : 4.0,
    "url" : "B_academy.html"
  },
  {
    "name" : "C academy",
    "location" : "서울시 노원구",
    "real_location" : "서울시 노원구 하계2동 307-256",
    "type" : "1종 보통",
    "price" : 420000,
    "star" : 4.5,
    "url" : "C_academy.html"
  },
  {
    "name" : "D academy",
    "location" : "서울시 노원구",
    "real_location" : "서울시 노원구 공릉동 139-804",
    "type" : "1종 보통",
    "price" : 450000,
    "star" : 2.0,
    "url" : "D_academy.html"
  },
  {
    "name" : "E academy",
    "location" : "서울시 노원구",
    "real_location" : "서울시 노원구 월계동 272-781",
    "type" : "1종 보통",
    "price" : 500000,
    "star" : 1.0,
    "url" : "E_academy.html"
  },
  {
    "name" : "A academy",
    "location" : "서울시 노원구",
    "real_location" : "서울시 노원구 중계1동 243-503",
    "type" : "2종 보통",
    "price" : 386000,
    "star" : 4.5,
    "url" : "A_academy.html"
  },
  {
    "name" : "B academy",
    "location" : "서울시 노원구",
    "real_location" : "서울시 노원구 상계동 127-311",
    "type" : "2종 보통",
    "price" : 420000,
    "star" : 4.0,
    "url" : "B_academy.html"
  },
  {
    "name" : "C academy",
    "location" : "서울시 노원구",
    "real_location" : "서울시 노원구 하계2동 307-256",
    "type" : "2종 보통",
    "price" : 320000,
    "star" : 3.0,
    "url" : "C_academy.html"
  },
  {
    "name" : "D academy",
    "location" : "서울시 노원구",
    "real_location" : "서울시 노원구 공릉동 139-804",
    "type" : "2종 보통",
    "price" : 350000,
    "star" : 2.0,
    "url" : "D_academy.html"
  },
  {
    "name" : "E academy",
    "location" : "서울시 노원구",
    "real_location" : "서울시 노원구 월계동 272-781",
    "type" : "2종 보통",
    "price" : 400000,
    "star" : 1.0,
    "url" : "E_academy.html"
  },
  {
    "name" : "A academy",
    "location" : "서울시 노원구",
    "real_location" : "서울시 노원구 중계1동 243-503",
    "type" : "2종 소형",
    "price" : 356000,
    "star" : 4.5,
    "url" : "A_academy.html"
  },
  {
    "name" : "B academy",
    "location" : "서울시 노원구",
    "real_location" : "서울시 노원구 상계동 127-311",
    "type" : "2종 소형",
    "price" : 370000,
    "star" : 4.0,
    "url" : "B_academy.html"
  },
  {
    "name" : "C academy",
    "location" : "서울시 노원구",
    "real_location" : "서울시 노원구 하계2동 307-256",
    "type" : "2종 소형",
    "price" : 270000,
    "star" : 3.0,
    "url" : "C_academy.html"
  },
  {
    "name" : "D academy",
    "location" : "서울시 노원구",
    "real_location" : "서울시 노원구 공릉동 139-804",
    "type" : "2종 소형",
    "price" : 300000,
    "star" : 2.0,
    "url" : "D_academy.html"
  },
  {
    "name" : "E academy",
    "location" : "서울시 노원구",
    "real_location" : "서울시 노원구 월계동 272-781",
    "type" : "2종 소형",
    "price" : 350000,
    "star" : 1.0,
    "url" : "E_academy.html"
  },
  {
    "name" : "A academy",
    "location" : "서울시 노원구",
    "real_location" : "서울시 노원구 중계1동 243-503",
    "type" : "원동기",
    "price" : 286000,
    "star" : 4.5,
    "url" : "A_academy.html"
  },
  {
    "name" : "B academy",
    "location" : "서울시 노원구",
    "real_location" : "서울시 노원구 상계동 127-311",
    "type" : "원동기",
    "price" : 320000,
    "star" : 4.0,
    "url" : "B_academy.html"
  },
  {
    "name" : "C academy",
    "location" : "서울시 노원구",
    "real_location" : "서울시 노원구 하계2동 307-256",
    "type" : "원동기",
    "price" : 220000,
    "star" : 3.0,
    "url" : "C_academy.html"
  },
  {
    "name" : "D academy",
    "location" : "서울시 노원구",
    "real_location" : "서울시 노원구 공릉동 139-804",
    "type" : "원동기",
    "price" : 250000,
    "star" : 2.0,
    "url" : "D_academy.html"
  },
  {
    "name" : "E academy",
    "location" : "서울시 노원구",
    "real_location" : "서울시 노원구 월계동 272-781",
    "type" : "원동기",
    "price" : 300000,
    "star" : 1.0,
    "url" : "E_academy.html"
  }
]
var dbacademy = [
  {
    'name':'A academy',
    'number':'02-2463-9263',
    'self':1
  },
  {
    'name':'B academy',
    'number':'02-1517-4400',
    'self':0
  },
  {
    'name':'C academy',
    'number':'02-1115-9846 ',
    'self':1
  },
  {
    'name':'D academy',
    'number':'02-0225-3918',
    'self':1
  },
  {
    'name':'E academy',
    'number':'02-7036-9936',
    'self':1
  }
]
var selectlist = []
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
    selectlist.push(data.name)
    $("#first-academy").append(`<option>${data.name}</option>`)
    $("#second-academy").append(`<option>${data.name}</option>`)
    return `
    <li>&rsaquo;
      <a href="${data.url}"><b>${data.name}</b></a>
      &nbsp;
      <i class="fa fa-times delete-like" data-key="${key}" aria-hidden="true"></i>
      <span style="line-height:2%"><br></span><br>
    </li>`
  })
  var childHTML = childHTMLs.join("")
  $("#like_info").empty()
  $("#like_info").append(childHTML)
  $(".loader-container").hide()
  $("body").css("background-color", "white")
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
          <tr>
              <td style="text-indent : 20px">전화 번호 :</td>
              <td style="text-indent : 10px">02-1115-9846</td>
          </tr>
      </table>
    <span style="line-height:1%"><br></span>
    <input type="button" class="btn btn-primary cancel_reservation" data-key="${key}" value = "예약 취소" style="margin-left : 20px; background-color: #337ab7; border-color:#2e6da4;"></input></div>`
  })
  var childHTML = childHTMLs.join("")
  $("#reservation_info").empty()
  $("#reservation_info").append(childHTML)
  bindcancel();
})

var width = document.body.offsetWidth
var height = document.body.offsetHeight
// $(".loader-container").offset({top: 100});
// $(".loader-container").offset({left: 100});

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

$(".form-control").change(function(){
  var f_academy = $("#first-academy").val()
  var s_academy = $("#second-academy").val()
  var f_type = $("#first-type").val()
  var s_type = $("#second-type").val()
  if(f_academy!="학원을 고르세요"&&f_type!="면허를 고르세요")
  {
    for(i=0;i<dbmypage.length;i++)
    {
      if(dbmypage[i]['name']==f_academy&&dbmypage[i]['type']==f_type)
      {
        $("#first-price").text(dbmypage[i]['price'])
        $("#first-star").text(dbmypage[i]['star'])
        $("#first-location").text(dbmypage[i]['real_location'])
        for(j=0;j<dbacademy.length;j++)
        {
          if(dbacademy[j]["name"]==f_academy)
          {
            if(dbacademy[j]['self']==0)
              $("#first-self").text("불가능")
            else
              $("#first-self").text("가능")
            $("#first-number").text(dbacademy[j]['number'])
          }
        }
      }
    }
  }
  else {
    $("#first-price").empty()
    $("#first-star").empty()
    $("#first-location").empty()
    $("#first-self").empty()
    $("#first-number").empty()
  }
  if(s_academy!="학원을 고르세요"&&s_type!="면허를 고르세요")
  {
    for(i=0;i<dbmypage.length;i++)
    {
      if(dbmypage[i]['name']==s_academy&&dbmypage[i]['type']==s_type)
      {
        $("#second-price").text(dbmypage[i]['price'])
        $("#second-star").text(dbmypage[i]['star'])
        $("#second-location").text(dbmypage[i]['real_location'])
        for(j=0;j<dbacademy.length;j++)
        {
          if(dbacademy[j]["name"]==s_academy)
          {
            if(dbacademy[j]['self']==0)
              $("#second-self").text("불가능")
            else
              $("#second-self").text("가능")
            $("#second-number").text(dbacademy[j]['number'])
          }
        }
      }
    }
  }
  else {
    $("#second-price").empty()
    $("#second-star").empty()
    $("#second-location").empty()
    $("#second-self").empty()
    $("#second-number").empty()
  }
})
