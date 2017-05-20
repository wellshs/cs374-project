var reservation_info = document.getElementById("reservation_info");


$('#cancel_reservation').click(function() {
    var result = confirm('정말 취소하시겠습니까?');

    if(result){
        reservation_info.remove();
    }
});
