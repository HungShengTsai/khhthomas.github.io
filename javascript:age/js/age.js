console.log('程式執行')

//檢查年紀
var CheckAge = function() {
    var age = $('#InputAge').val()
    if (age >= 18) {
        $('#output').val('已成年')
    } else {
        $('#output').val('未成年')
    }
}

$('#RunCheck').on('click', CheckAge)
    //CheckAge 就變成一個變數了，只是這個變數是一段程式碼（一段函式）


//上次寫法：匿名函式
//$('#RunCheck').on('click', function() {
//    var age = $('#InputAge').val()
//    if (age >= 18) {
//        $('#output').val('已成年')
//    } else {
//        $('#output').val('未成年')
//    })