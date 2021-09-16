$(function(){
    
    var winWidth=$(window).width();
    if(winWidth >=1000) {
        $(window).on("load",function(){ 
            $(".loader").delay(1500).animate({width:'toggle'},2000);
            $(".loader_wrap").delay(5000).animate({width:'toggle'},2000);
            $(".wrap").show(10000);
        });
        $("#fullpage").fullpage({
            navigation:true,
            navigationPosition:"left",
            navigationTooltips:["MAIN","EDITORIAL_DESIGN_PORTFOLIO","WEB_PORTFOLIO","INTRODUCE_MY_SELF","THANK_YOU"],
            showActiveTooltip:true,
            menu: '#menu',
            anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
            loopTop: true,
            loopBottom: true,
            normalScrollElements: '.scrollable-element',
            afterLoad:function(anchorLink, index, direction) {
                //4번째 section에서 자식 콘텐츠에 active설정
                if(index==1) {
                    $(".introduce .pc_intro_wrap .intro_right").removeClass("active");
                    $('.pc_intro_wrap .intro_right .skill__inner-bar').removeClass('active');
                    $(".pc_intro_wrap .intro_left").removeClass("active");
                    $(".pc_edit_design .slide_wrap .left_box").removeClass("active");
                    $(".pc_edit_design .slide_wrap .right_box").removeClass("active");
                    $(".pc_web_port .slide_wrap .left_box .left_web").removeClass("active");
                    $(".pc_web_port .slide_wrap .explain").removeClass("active");
                    $(".Bye footer > div").removeClass("active");
                }
                if(index==2) {
                    $(".introduce .pc_intro_wrap .intro_right").removeClass("active");
                    $('.pc_intro_right .skill__inner-bar').removeClass('active');
                    $(".pc_intro_left").removeClass("active");
                    $(".pc_edit_design .slide_wrap .left_box").addClass("active");
                    $(".pc_edit_design .slide_wrap .right_box").addClass("active");
                    $(".pc_web_port .slide_wrap .left_box .left_web").removeClass("active");
                    $(".pc_web_port .slide_wrap .explain").removeClass("active");
                    $(".Bye footer > div").removeClass("active");
                }
                if(index==3) {
                    $(".introduce .pc_intro_wrap .intro_right").removeClass("active");
                    $('.pc_intro_right .skill__inner-bar').removeClass('active');
                    $(".pc_intro_left").removeClass("active");
                    $(".pc_edit_design .slide_wrap .left_box").removeClass("active");
                    $(".pc_edit_design .slide_wrap .right_box").removeClass("active");
                    $(".pc_web_port .slide_wrap .left_box .left_web").addClass("active");
                    $(".pc_web_port .slide_wrap .explain").addClass("active");
                    $(".Bye footer > div").removeClass("active");
                }
                if(index==4) {
                    $(".introduce .pc_intro_wrap .intro_right").addClass("active");
                    $('.pc_intro_right .skill__inner-bar').addClass('active');  
                    $(".pc_intro_left").addClass("active");
                    $(".pc_edit_design .slide_wrap .left_box").removeClass("active");
                    $(".pc_edit_design .slide_wrap .right_box").removeClass("active");
                    $(".pc_web_port .slide_wrap .left_box .left_web").removeClass("active");
                    $(".pc_web_port .slide_wrap .explain").removeClass("active");
                    $(".Bye footer > div").removeClass("active");
                }
                if(index==5) {
                    $(".introduce .pc_intro_wrap .intro_right").removeClass("active");
                    $('.pc_intro_right .skill__inner-bar').removeClass('active');  
                    $(".pc_intro_left").removeClass("active");
                    $(".pc_edit_design .slide_wrap .left_box").removeClass("active");
                    $(".pc_edit_design .slide_wrap .right_box").removeClass("active");
                    $(".pc_web_port .slide_wrap .left_box .left_web").removeClass("active");
                    $(".pc_web_port .slide_wrap .explain").removeClass("active");
                    $(".Bye footer > div").addClass("active");

                }
            }
        });
        //my_self

        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },  
        });
    }

    //menu
    $("#sub_menu").hide();
    $("#mo_sub_menu").hide();
    $(window).resize(function(){
        menuClick();
    });    

    $("#mo_sub_menu .close").click(function(){
        $("#mo_sub_menu").hide();
    });
    menuClick();
    function menuClick(){
        $(".menu p").click(function(){
            if(winWidth>=1000){
                $("#sub_menu").show();
            }else{
                $("#mo_sub_menu").show();
            }
        });
    }
    

    //menu hide
    $(".close a").click(function(){
        $("#sub_menu").hide();
    });
    $("#sub_menu ul li a").click(function(){
        $("#sub_menu").hide();
    });

    //portfolio
    $(".web_port .slide_hover").hide();
    $(".web_port .slide_wrap .explain .button_view").click(function(){
        $(".web_port .slide_wrap").hide();
        $(".web_port .slide_hover").show();
    });
    $(".web_port .slide_hover .hover_close a").click(function(){
        $(".web_port .slide_hover").hide();
        $(".web_port .slide_wrap").show();

    })

    

    












});