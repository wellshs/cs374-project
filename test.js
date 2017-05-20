
// Initialize Firebase
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
var postsRef = database.ref("posts")
var academyRef = database.ref("academy")

academyRef.push({
  "name" : "ABC academy",
  "location" : "Nowon-gu, Seoul",
  "real_location" : "102-71, Nowon-gu, Seoul",
  "type" : "2종 보통",
  "date" : "2017-05-18",
  "url" : "A_academy.html"
})

//클릭시 database에 값 넣기
$("#submit").click(function(e) {
  var username = $("#writer").val()
  var comment = $("#comment").val()
  console.log(username, comment)
  postsRef.push({
    username: username,
    comment: comment,
    like: 0,
  })
})

//처음에 값 읽어오기
postsRef.once('value').then(function(snapshot)
{
  var comments = snapshot.val()
  Object.keys(comments).map(function(key)
  {
    alert(comments[key].username+"  "+comments[key].comment+"  "+comments[key].like)
  })
})


//data 읽어서 쓰기
postsRef.on("value", function(newData) {
  var comments = newData.val()
  var childHTMLs = Object.keys(comments).map(function(key) {
    var data = comments[key]
    var like = data.like
    return `
      <div class="post">
        <span><b>${data.username}</b><span>
        <span>${data.comment}</span>
        <div>${data.like}
          <button class="like" data-key="${key}" data-like="${like}">like</button>
        </div>
      </div>
    `
  })
  var childHTML = childHTMLs.join("")
  $("#posts").empty()
  $("#posts").append(childHTML)
})

//like 조절하기
$("#posts").on("click", ".like", function(event) {
  var key = $(this).data('key')
  var like = $(this).data("like")
  console.log(key, like)
  var postRef = database.ref("posts/" + key)
  postRef.update({
    like: like+1
  })
})
