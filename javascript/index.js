/**
 * Created by lenovo on 2017/6/7.
 */
window.onload = function () {
    //var oUl = document.getElementById('w-r');
    //oUl.addEventListener('mouseover',function(ev){
    //var ev = ev || window.event;
    //console.log(ev);
    //var target = ev.target || ev.srcElement;
    //console.log(target);
    //if(target.className =='w-r-f w-r-h'){
    //    target.children[1].style.display = "block"
    //}
    //if(target.tagName.toLocaleLowerCase()=='a'){
    //    target.nextElementSibling.style.display='block';
    //}
    //if(target.tagName.toLocaleLowerCase()=='div'){
    //    target.style.display='block';
    //}
    //},true);
    //oUl.addEventListener('mouseout',function(ev){
    //    var ev = ev || window.event;
    //    var target = ev.target || ev.srcElement;
    //    //console.log(target);
    //    if(target.className =='w-r-f w-r-h'){
    //        target.children[1].style.display = "none"
    //    }
    //    if(target.tagName.toLocaleLowerCase()=='a'){
    //        target.nextElementSibling.style.display='none';
    //    }
    //    if(target.tagName.toLocaleLowerCase()=='div'){
    //        target.style.display='none';
    //    }
    //},true);
    //var menu = document.getElementById('menu1-ul');
    //var oUl = document.getElementById('menu1-ul1');
    //var menu2 = document.getElementById('menu2')
    //oUl.addEventListener('mouseover',function(ev){
    //    var ev = ev || window.event;
    //    //console.log(ev);
    //    var target = ev.target || ev.srcElement;
    //    //console.log(target);
    //    menu2.style.display = "block";
    //},true);
    //oUl.addEventListener('mouseout',function(ev){
    //    var ev = ev || window.event;
    //    //console.log(ev);
    //    var target = ev.target || ev.srcElement;
    //    //console.log(target);
    //    menu2.style.display = "none";
    //},true);
    //var promotion = document.getElementById('promotion');
    //var notice = document.getElementById('notice');
    //var sroll = document.getElementById('sroll');
    //promotion.addEventListener("click",function(){
    //    console.log('k');
    //    sroll.style.transform.translateX = '10px';
    //});
    $(function () {
        var li = $('.carousel-li');
        for (var i = 0; i < li.length-1; i++) {
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
        $("#service-huafei").mouseover(function () {
            $(".service-a").css({"transform": "translateY(-40px)"})
            $("#tab").css({"display": "block"});
            $(".service-a span").removeClass("selected-span").addClass("service-f");
            $("#service-huafei span").removeClass("service-f").addClass("selected-span");
            $(".tab-info").css({"display": "none"});
            $("#tab-huafei").css({"display": "block"})

        })
        $("#service-jipiao").mouseover(function () {
            $(".service-a").css({"transform": "translateY(-40px)"})
            $("#tab").css({"display": "block"});
            $(".service-a span").removeClass("selected-span").addClass("service-f");
            $("#service-jipiao span").removeClass("service-f").addClass("selected-span");
            $(".tab-info").css({"display": "none"});
            $("#tab-jipiao").css({"display": "block"})

        });
        $("#service-jiudian").mouseover(function () {
            $(".service-a").css({"transform": "translateY(-40px)"})
            $("#tab").css({"display": "block"});
            $(".service-a span").removeClass("selected-span").addClass("service-f");
            $("#service-jiudian span").removeClass("service-f").addClass("selected-span");
            $(".tab-info").css({"display": "none"});
            $("#tab-jiudian").css({"display": "block"})
        });
        $("#service-youxi").mouseover(function () {
            $(".service-a").css({"transform": "translateY(-40px)"})
            $("#tab").css({"display": "block"});
            $(".service-a span").removeClass("selected-span").addClass("service-f");
            $("#service-youxi span").removeClass("service-f").addClass("selected-span");
            $(".tab-info").css({"display": "none"});
            $("#tab-youxi").css({"display": "block"})
        });
        var i = 0;
        $(".slider-li").mouseover(function(){
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
              $(".slider-li").eq(i+1).removeClass("slider-li2");
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
                $(".slider-li").eq(i-1).removeClass("slider-li2");
            }

        });
        var inter = setInterval(function () {
            $("#slider-a-right").click();
        }, 3000);
        $(".warper").mouseover(function () {
            clearInterval(inter);
            inter = null;
        });
        $(".warper").mouseleave(function () {
            inter = setInterval(function () {
                $("#slider-a-right").click();
            }, 3000);
        });
    });
}

