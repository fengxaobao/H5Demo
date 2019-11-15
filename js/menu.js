$(document).ready(function () {
    $(".main>a").on("click", function () {
        let ul = $(this).next("ul");
        console.log(ul)
        // ul.toggle(1000,function () {
        //     alert("回调完成")
        // })
        ul.toggle("slow");//slow,normal ,fast
    });
    // $(".main ul li a").on("click", function (evn) {
    //     console.log(evn)
    //     alert(evn.target.innerText)
    // })
    $(".h_main").hover(function () {
        $(this).children("ul").slideDown()
    }, function (e) {
        $(this).children("ul").slideUp()
    });
    console.log($(".h_main").find("li").children("a"))

    // $(".h_main").children().forEach(function (v) {
    //     console.log(v)
    //
    // })
    $(".h_main li").each(function (index) {
        console.log( $(this).prop());
        $(this).on("click",function () {
            if(index == 1){
                console.log("1121");
                $("div").load("work.html")
            }
        })
    })

})