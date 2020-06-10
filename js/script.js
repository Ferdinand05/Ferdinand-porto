
// tangkap 

// eslint-disable-next-line no-undef
$('.nav-link').on('click',function(e){
    
    // eslint-disable-next-line no-undef
    var tujuan = $(this).attr("href");


    // eslint-disable-next-line no-undef
    var elemenTujuan = $(tujuan);
    console.log(elemenTujuan);

    // eslint-disable-next-line no-undef
    $('html,body').animate({

        scrollTop: elemenTujuan.offset().top - 60

    },700,'swing');

    e.preventDefault();

});











