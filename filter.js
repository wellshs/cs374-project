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
                $("#result").append("<p>" + db[i].type + " : " + db[i].price + "</p>");
            }
        }
    if(x==0){
        document.getElementById("result").innerHTML = "No result";
    }
    bindacademyname();
}
