/**
 * Created by lenovo on 2017/6/11.
 */
$(function () {
    var warper = document.getElementById("u-warper");
    //console.log(warper.style.left);
    var i = 0;
    $("#bags-right").click(function () {
        if (i == 4) {
            $(".u-warper").animate({left: "0"});
            i = 0;
        }
        else {
            $(".u-warper").animate({left: "-=148"});
            i++;
        }
    });
    $("#bags-left").click(function () {
        if (i == 0) {
            $(".u-warper").animate({left: "-592"});
            i = 4;
        }
        else {
            $(".u-warper").animate({left: "+=148"});
            i--;
        }
    });
    var topsasrch = document.getElementById("top-search");
    document.getElementById("level-hight").onclick = function () {
        if (topsasrch.style.display == "block") {
            topsasrch.style.display = "none";
        }
        else {
            topsasrch.style.display = "block";
        }
    };
    var tsdel = document.getElementById("ts-del");
    tsdel.onclick = function () {
        topsasrch.style.display = "none";
    };
    document.getElementById("btn-1").onclick = function () {
        topsasrch.style.display = "none";
    };
});