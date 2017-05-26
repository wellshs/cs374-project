var searchlist = [];
var z = [];

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
var curRef = database.ref("cur/-Kl40P02UGAr7kMtn9bE")

function bindacademyname(){
  $(".academyname").click(function() {
    console.log($(this).text());
    var spl = $(this).next().next().text().split(" : ");
    curRef.update({
      name : $(this).text(),
      type : spl[0],
      price : spl[1]
    })
  })
};



function myFunction() {
    var location, type, date, x=0;

    location = document.getElementById("location").value;
    type = document.getElementById("type").value;
    date = document.getElementById("date").value;
    $("#result").empty();
    searchlist = [];
    z = [];

    $("#additional_filter").show();
    $("#someSwitchOptionPrimary").prop('checked', false);
    $('#onoff').text('가격 정렬 OFF');

    for(var i=0; i<db.length; i++){
            if((location == db[i].location) && (type == db[i].type) && (date == db[i].date)){
                x += 1
                var a = document.createElement('a');
                var linkText = document.createTextNode(db[i].name);
                a.appendChild(linkText);
                a.className += "academyname";
                a.href = db[i].url;


                $("#result").append(a);
                $("#result").append("<p>" + db[i].real_location + "</p>")
                $("#result").append("<p>" + db[i].type + " : " + db[i].price + "</p>");

                searchlist.push([a, db[i].real_location, db[i].type, db[i].price]);
                z.push([a, db[i].real_location, db[i].type, db[i].price]);
            }
        }
    if(x==0){
        document.getElementById("result").innerHTML = "No result";
    }

    bindacademyname();
}





$("#someSwitchOptionPrimary").click(function(){
    if ($('#onoff').text() == '가격 정렬 OFF'){
        $('#onoff').text('가격 정렬 ON');

        $("#result").empty();

        searchlist.sort(function(a,b) {
            return a[3] - b[3];
        });

        for(var j=0; j<searchlist.length; j++){
            $("#result").append(searchlist[j][0]);
            $("#result").append("<p>" + searchlist[j][1] + "</p>");
            $("#result").append("<p>" + searchlist[j][2] + " : " + searchlist[j][3] + "</p>");
        }
    }
    else{
        $('#onoff').text('가격 정렬 OFF');

        $("#result").empty();

        for(var k=0; k<z.length; k++){
            $("#result").append(z[k][0]);
            $("#result").append("<p>" + z[k][1] + "</p>");
            $("#result").append("<p>" + z[k][2] + " : " + z[k][3] + "</p>");
        }
    }
});
