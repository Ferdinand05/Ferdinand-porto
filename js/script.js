
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




// parallax

$(window).scroll(function () { 

    //? jumbotron
    var wScroll = $(this).scrollTop();
    
    $(".jumbotron img").css({
        'transform':'translate(0px , '+ wScroll/4 +'%)'
    });

    $(".jumbotron h1").css({
        'transform':'translate(0px , '+ wScroll/2 +'%)'
    });

    $(".jumbotron p").css({
        'transform':'translate(0px , '+ wScroll/1.3 +'%)'
    });



    //? portfolio

    if( wScroll > $(".portfolio").offset().top - 200 ){

        $(".portfolio .card").each(function(i){

            setTimeout(function(){
                $(".portfolio .card").eq(i).addClass("muncul");
            }, 300 * (i + 1));

        });


        
    }


});



// about

$(window).on('load', function () {
    $(".pKiri").addClass("pMuncul");
    $(".pKanan").addClass("pMuncul");
});







