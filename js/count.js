let countNumber = 0
let count = function () {
    postMessage(countNumber)
    countNumber++
    if(countNumber == 10){
        clearTimeout()
    }else {
        setTimeout(count, 1000)
    }
    document.getElementsByName("1")
}
count()