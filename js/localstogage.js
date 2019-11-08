let btn;
let text;
window.onload = function () {
   btn =  document.getElementById("btn")
   text =  document.getElementById("text")
    btn.onclick = function () {
       console.log( text.value)
        localStorage.setItem("text",text.value)
        localStorage.setItem("key","value")
    }
    if(localStorage.getItem("text")){
        text.value = localStorage.getItem("text")
    }
}