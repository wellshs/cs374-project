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
var likeRef = database.ref("like")
jQuery(function($){
	// List Tab Navigation
	var $tab_list = $('.tab.list');
	$tab_list.removeClass('jx').find('ul ul').hide();
	$tab_list.find('li li.active').parents('li').addClass('active');
	$tab_list.find('li.active>ul').show();
	$tab_list.each(function(){
		var $this = $(this);
		$this.height($this.find('li.active>ul').height()+40);
	});
	function listTabMenuToggle(event){
		var $this = $(this);
		$this.next('ul').show().parent('li').addClass('active').siblings('li').removeClass('active').find('>ul').hide();
		$this.closest('.tab.list').height($this.next('ul').height()+40);
		if($this.attr('href') === '#'){
			return false;
		}
	}
	$tab_list.find('>ul>li>a').click(listTabMenuToggle).focus(listTabMenuToggle);
});



var list = [];
likeRef.once("value").then(function(snapshot){
	var likes = snapshot.val()
	list = Object.keys(likes).map(function(key){
		var data = likes[key].name.trim()
		return data
	})
});


$(".btn-like").click(function(){
	for(var i=0;i<list.length;i++)
	{
		if(list[i]==$("#academy-name").text().trim())
		{
			alert("이미 관심학원에 등록된 학원입니다.");
			return;
		}
	}
  var r = confirm("확인을 누르시면 관심학원에 등록됩니다.")
	if(r)
	{
		console.log($("#academy-name").text())
		likeRef.push({
			name : $("#academy-name").text().trim(),
			url : window.location.href
		})
		$(".btn-like").attr('disabled',true)
	}
});

