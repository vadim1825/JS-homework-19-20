$(function() {


    $(".f_link").mouseenter(function() {

    	$(".f_img").css("opacity", ".2");

        $(".f_cross").css("opacity", "1");

        $(".f_text").css("color", "#f3b50d");
    })

    .mouseleave(function() {

        $(".f_img").css("opacity", "1");

        $(".f_cross").css("opacity", "0");

        $(".f_text").css("color", "#fff");
    });


       

       $(".s_link").mouseenter(function() {

    	$(".s_img").css("opacity", ".2");

        $(".s_cross").css("opacity", "1");

        $(".s_text").css("color", "#f3b50d");
    })

    .mouseleave(function() {

        $(".s_img").css("opacity", "1");

        $(".s_cross").css("opacity", "0");

        $(".s_text").css("color", "#fff");
    });




    $(".t_link").mouseenter(function() {

    	$(".t_img").css("opacity", ".2");

        $(".t_cross").css("opacity", "1");

        $(".t_text").css("color", "#f3b50d");
    })

    .mouseleave(function() {

        $(".t_img").css("opacity", "1");

        $(".t_cross").css("opacity", "0");

        $(".t_text").css("color", "#fff");
    });

    


    $(".fo_link").mouseenter(function() {

    	$(".fo_img").css("opacity", ".2");

        $(".fo_cross").css("opacity", "1");

        $(".fo_text").css("color", "#f3b50d");
    })

    .mouseleave(function() {

        $(".fo_img").css("opacity", "1");

        $(".fo_cross").css("opacity", "0");

        $(".fo_text").css("color", "#fff");
    });




    $('.f_banner').click(function() {

    	$('.f_banner').toggleClass('open_banner');

    	$('.f_box').toggleClass('slide');

    	$('.f_box').toggleClass('open_box');

    	$('.first_text').toggleClass('slide');

    });

    $('.s_banner').click(function() {

    	$('.s_banner').toggleClass('open_banner');

    	$('.s_box').toggleClass('slide');

    	$('.s_box').toggleClass('open_box');

    	$('.second_text').toggleClass('slide');

    });

    $('.t_banner').click(function() {

    	$('.t_banner').toggleClass('open_banner');

    	$('.t_box').toggleClass('slide');

    	$('.t_box').toggleClass('open_box');

    	$('.third_text').toggleClass('slide');

    });

    $('.fo_banner').click(function() {

    	$('.fo_banner').toggleClass('open_banner');

    	$('.fo_box').toggleClass('slide');

    	$('.fo_box').toggleClass('open_box');

    	$('.fourth_text').toggleClass('slide');

    });
        


});