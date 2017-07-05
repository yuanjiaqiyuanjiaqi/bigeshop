
$(function () {
    var li = $('.carousel-li');
    for (var i = 0; i < li.length - 1; i++) {
        $("#slider-ul").append('<li class="slider-li"></li>')//.addClass('slider-li');
    }
    $('#promotion').mouseover(function () {
        $('#note2').css({display: "none"});
        $('#note1').css({display: "block"});
        $('#scroll').css({"transform": "translateX(0px)"}, "0.5s");
        ;
    });
    $('#notice').mouseover(function () {
        $('#scroll').css({"transform": "translateX(48px)"}, "0.5s");
        ;
        $('#note2').css({display: "block"});
        $('#note1').css({display: "none"});
    });
    var youxi = function () {
        $(".service-a").css({"transform": "translateY(-40px)"})
        $("#tab").css({"display": "block"});
        $(".service-a span").removeClass("selected-span").addClass("service-f");
        $("#service-youxi span").removeClass("service-f").addClass("selected-span");
        $(".tab-info").css({"display": "none"});
        $("#tab-youxi").css({"display": "block"})
    };
    $("#service-huafei").mouseover(function () {
        $(".service-a").css({"transform": "translateY(-40px)"})
        $("#tab").css({"display": "block"});
        $(".service-a span").removeClass("selected-span").addClass("service-f");
        $("#service-huafei span").removeClass("service-f").addClass("selected-span");
        $(".tab-info").css({"display": "none"});
        $("#tab-huafei").css({"display": "block"});
        $("#service-youxi").on("mouseover", youxi);

    })
    $("#service-jipiao").mouseover(function () {
        $(".service-a").css({"transform": "translateY(-40px)"})
        $("#tab").css({"display": "block"});
        $(".service-a span").removeClass("selected-span").addClass("service-f");
        $("#service-jipiao span").removeClass("service-f").addClass("selected-span");
        $(".tab-info").css({"display": "none"});
        $("#tab-jipiao").css({"display": "block"});
        $("#service-youxi").on("mouseover", youxi);
    });
    $("#service-jiudian").mouseover(function () {
        $(".service-a").css({"transform": "translateY(-40px)"})
        $("#tab").css({"display": "block"});
        $(".service-a span").removeClass("selected-span").addClass("service-f");
        $("#service-jiudian span").removeClass("service-f").addClass("selected-span");
        $(".tab-info").css({"display": "none"});
        $("#tab-jiudian").css({"display": "block"});
        $("#service-youxi").on("mouseover", youxi);
    });
    $("#service-youxi").on("mouseover", youxi);
    $("#service_pop_close").click(function () {
        $("#service-youxi").off("mouseover");
        $("#tab").css({display: "none"});
        $(".service-a").css({"transform": "translateY(0)"})
        $(".selected-span").removeClass(".selected-span").addClass("service-f");
    });
    var i = 0;
    $(".slider-li").mouseover(function () {
        $(".slider-li").removeClass("slider-li2");
        $(this).addClass("slider-li2");
        i = $(this).index();
        //i--;
        $(".carousel-li").removeClass("show");
        $(".carousel-li").eq(i).addClass("show");
    });
    $("#slider-a-left").click(function () {
        i--;
        if (i == -1) {
            i = 6;
            $(".carousel-li").eq(0).removeClass("show");
            $(".carousel-li").eq(i).addClass("show");
            $(".slider-li").eq(i).addClass("slider-li2");
            $(".slider-li").eq(0).removeClass("slider-li2");
        }
        else {
            $(".carousel-li").eq(i).addClass("show");
            $(".carousel-li").eq(i + 1).removeClass("show");
            $(".slider-li").eq(i).addClass("slider-li2");
            $(".slider-li").eq(i + 1).removeClass("slider-li2");
        }

    });
    $("#slider-a-right").click(function () {
        i++;
        if (i == 7) {
            i = 0;
            $(".carousel-li").eq(6).removeClass("show");
            $(".carousel-li").eq(i).addClass("show");
            $(".slider-li").eq(i).addClass("slider-li2");
            $(".slider-li").eq(6).removeClass("slider-li2");
        }
        else {
            //console.log(slider-li);
            $(".carousel-li").eq(i - 1).removeClass("show");
            $(".carousel-li").eq(i).addClass("show");
            $(".slider-li").eq(i).addClass("slider-li2");
            $(".slider-li").eq(i - 1).removeClass("slider-li2");
        }

    });
    var j = 0;
    $("#sup_btn_pre").click(function () {
        j--;
        if (j == -1) {
            j = 2;
            $(".sup_page").eq(0).removeClass("show");
            $(".sup_page").eq(j).addClass("show");
            $(".sup_ind_item").eq(j).addClass("active");
            $(".sup_ind_item").eq(0).removeClass("active");
        }
        else {
            $(".sup_page").eq(j).addClass("show");
            $(".sup_page").eq(j + 1).removeClass("show");
            $(".sup_ind_item").eq(j).addClass("active");
            $(".sup_ind_item").eq(j + 1).removeClass("active");
        }
    });
    var m = 0;
    $(".live_btn_pre").click(function () {
        m--;
        if (m == -1) {
            m = 4;
            $(".live_item").eq(0).removeClass("show");
            $(".live_item").eq(m).addClass("show");
            $(".live_ind_item").eq(m).addClass("active");
            $(".live_ind_item").eq(0).removeClass("active");
        }
        else {
            $(".live_item").eq(m).addClass("show");
            $(".live_item").eq(m + 1).removeClass("show");
            $(".live_ind_item").eq(m).addClass("active");
            $(".live_ind_item").eq(m + 1).removeClass("active");
        }
    });
    $("#sup_btn_next").click(function () {
        j++;
        if (j == 3) {
            j = 0;
            $(".sup_page").eq(2).removeClass("show");
            $(".sup_page").eq(j).addClass("show");
            $(".sup_ind_item").eq(j).addClass("active");
            $(".sup_ind_item").eq(2).removeClass("active");
        }
        else {
            $(".sup_page").eq(j - 1).removeClass("show");
            $(".sup_page").eq(j).addClass("show");
            $(".sup_ind_item").eq(j).addClass("active");
            $(".sup_ind_item").eq(j - 1).removeClass("active");
        }
    });
    $(".live_btn_next").click(function () {
        m++;
        if (m == 5) {
            m = 0;
            $(".live_item").eq(4).removeClass("show");
            $(".live_item").eq(m).addClass("show");
            $(".live_ind_item").eq(m).addClass("active");
            $(".live_ind_item").eq(4).removeClass("active");
        }
        else {
            $(".live_item").eq(m - 1).removeClass("show");
            $(".live_item").eq(m).addClass("show");
            $(".live_ind_item").eq(m).addClass("active");
            $(".live_ind_item").eq(m - 1).removeClass("active");
        }
    });
    $(".tab-info-li").on("mouseover", function () {
        $(".tab-info-li-selected").removeClass("tab-info-li-selected");
        $(this).addClass("tab-info-li-selected");
    });

    var inter = setInterval(function () {
        $("#slider-a-right").click();
    }, 3000);
    var inter1 = setInterval(function () {
        $("#sup_btn_next").click();
    }, 3000);
    var inter2 = setInterval(function () {
        $(".live_btn_next").click();
    }, 3000);
    $(".warper").mouseover(function () {
        clearInterval(inter);
        inter = null;
    });
    $(".sup_tab").mouseover(function () {
        clearInterval(inter1);
        inter1 = null;
    })
    $(".live_inner").mouseover(function () {
        clearInterval(inter2);
        inter2 = null;
    })
    $(".warper").mouseleave(function () {
        inter = setInterval(function () {
            $("#slider-a-right").click();
        }, 3000);
    });

    $(".sup_tab").mouseleave(function () {
        inter1 = setInterval(function () {
            $("#sup_btn_next").click();
        }, 3000);
    });
    $(".live_inner").mouseleave(function () {
        inter2 = setInterval(function () {
            $(".live_btn_next").click();
        }, 3000);
    });
    $(".top_tab_head_item").mouseover(function () {
        var i = $(this).index();
        $(".top_tab_active").animate({"left": i * 77});
        $(".top_tab_content_item").eq(i).addClass("top_tab_content_item_on");
        $(".top_tab_content_item").eq(i).siblings().removeClass("top_tab_content_item_on")
    });
    //a链接不好使用jQuery
    //$("#pt_logo_pre").on("click",function(){
    //    alert("d");
    //});
    //$("#pt_logo_pre").click(function(){
    //    alert("d");
    //});
    //$("#pt_logo_next").click(function(){
    //    alert("d");
    //});
    //a链接
    $(".lift_item").click(function(){
        $(".lift_item").removeClass("lift_item_on");
        $(this).addClass("lift_item_on");
        var top = 1400 + ($(this).index())*523;
        if($(this).index()==0){
            $("html,body").animate({scrollTop:"1600"},1000)
        }
        else if($(this).index()==1){
            $("html,body").animate({scrollTop:"2446"},1000)
        }
        else if($(this).index()==2){
            $("html,body").animate({scrollTop:"3000"},1000)
        }
        else if($(this).index()==3){
            $("html,body").animate({scrollTop:"3523"},1000)
        }
    });
    $(".lift_item_top").click(function(){
        $("html,body").animate({scrollTop:"0"},1000);
        $(".lift_item_first").addClass("lift_item_on");
    });
});


