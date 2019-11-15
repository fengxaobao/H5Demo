$(document).ready(function () {
    console.log("document")
    $("#btn").on("click",function () {
        console.log("123")
        $("#dialog").dialog()
    });
});