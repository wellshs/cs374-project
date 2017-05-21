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

$(".btn-like").click(function(){
  var r = confirm("확인을 누르시면 관심학원에 등록됩니다.")
	if(r)
	{
		likeRef.push({
			name : "A academy",
			url : "A_academy.html"
		})
	}
});
