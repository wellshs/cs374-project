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

function bindacademyname(){
  $(".academyname").click(function() {
    console.log($(this).text());
    curRef.update({
      name : $(this).text()
    })
  })
};

var db;


db = [ {
    "name" : "ABC academy",
    "location" : "서울시 노원구",
    "real_location" : "서울시 노원구 중계1동 243-5번지",
    "type" : "2종 보통",
    "date" : "2017-05-18",
    "url" : "A_academy.html"
  },
  {
    "name" : "ABC academy",
    "location" : "서울시 노원구",
    "real_location" : "서울시 노원구 중계1동 243-5번지",
    "type" : "2종 보통",
    "date" : "2017-05-16",
    "url" : "A_academy.html"
  },
  {
    "name" : "H academy",
    "location" : "서울시 노원구",
    "real_location" : "서울시 노원구 상계동 127-3번지",
    "type" : "2종 보통",
    "date" : "2017-05-16",
    "url" : "A_academy.html"
  },
  {
    "name" : "C academy",
    "location" : "서울시 노원구",
    "real_location" : "서울시 노원구 하계2동 307-8번지",
    "type" : "2종 보통",
    "date" : "2017-05-16",
    "url" : "A_academy.html"
  }
]


function myFunction() {
    var location, type, date, x=0;

    location = document.getElementById("location").value;
    type = document.getElementById("type").value;
    date = document.getElementById("date").value;
    $("#result").empty();

    for(var i=0; i<db.length; i++){
            if((location == db[i].location) && (type == db[i].type) && (date == db[i].date)){
                //$("#result").append("<p>" + db[i].name + "</p>");
                //$("#result").append("<p>" + db[i].real_location + "</p>");
                //$("#result").append("<p>" + db[i].type + "</p>");
                x += 1
                var a = document.createElement('a');
                var linkText = document.createTextNode(db[i].name);
                a.appendChild(linkText);
                a.className += "academyname";
                // a.addClass("academy");
                a.href = db[i].url;

                $("#result").append(a);
                $("#result").append("<p>" + db[i].real_location + "</p>")
                $("#result").append("<p>" + db[i].type + "</p>");
            }
        }
    if(x==0){
        document.getElementById("result").innerHTML = "No result";
    }
    bindacademyname();
}
