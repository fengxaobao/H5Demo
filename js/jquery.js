$(document).ready(function () {
    $("#btn1").on("click", function () {
        $("#div1").fadeIn(1000);
        $("#div2").fadeIn();
        $("#div3").fadeIn();
    })
    $("#btn2").on("click", function () {
        $("#div1").fadeOut();
        $("#div2").fadeOut();
        $("#div3").fadeOut(1000);
    })
    $("#btn3").on("click", function () {
        $("#div1").fadeToggle();
        $("#div2").fadeToggle();
        $("#div3").fadeToggle(1000);
    })
    $("#btn4").on("click", function () {
        $("#div4").slideDown();
        $("#div5").slideDown();
        $("#div6").fadeToggle(1000);
    })
    $("#btn5").on("click", function () {
        $("#div4").slideUp();
        $("#div5").slideUp();
        $("#div6").slideUp(1000);
    })
    $("#btn6").on("click", function () {
        $("#div4").slideToggle();
        $("#div5").slideToggle();
        $("#div6").slideToggle(1000);
    })
    $("#btn7").on("click", function () {
        $("#div6").hide();
    })
    $("#btn8").on("click", function () {
        $("#div6").show();
    })

    $(".div_group div").last().css("background","red");//最后一个符合的元素
    $(".div_group div").first().css("background","blue");//第一个符合的元素
    $(".div_group div").eq(2).css("background","yellow");//第三个符合的元素，元素下标从0开始 2 就是第三位
    $(".div_group div").filter(function (evt) {
        console.log(evt)
        return evt==2

    }).text("这是过滤后的结果")


    // $(".div_group div").parent().css("background","red");//获取第一个父元素
    // $(".div_group div").parents().css("background","blue");//获取所有父级元素
    $(".div_group div").childNodes.forEach(function (i) {
        i.css("background","red")
    });//子元素

});