//變數
var allBeverageResult = []

//函式
var rand = (start, end) => {
    //決定範圍
    var n = Math.abs(end - start) + 1
        //Magnify n times
    var r = Math.random() * n
        //Integer
    var r = Math.floor(r)
        //Shift to 'start'
    var r = r + ((start <= end) ? start : end) //防止 start>end(記得要括號！！！！)

    return r
}

//亂數器
var beverageResult = () => {
    for (i = 1; i <= 6; i++) {
        allBeverageResult.push(i)
    }
    var n = rand(2000, 4000)
    for (i = 1; i <= n; i++) {
        var r = rand(0, 5)
        var temp = allBeverageResult[r]
        allBeverageResult[r] = allBeverageResult[0]
        allBeverageResult[0] = temp
    }
}



//產生物件
var blank = () => {
    divBlank = $('#4').get()
    $divBlank = $(divBlank)
    $container = $('<div>').attr('class', 'container').append($divBlank)
    $section = $('<section>').attr('class', 'blog-page').append($container)
    $('#show').append($section)
}

var restartButton4 = () => {
    $div4 = $('<div>').attr('class', 'col-5')
    divRestart4 = $('#restart4').get()
    $divRestart4 = $(divRestart4)

    $container4 = $('<div>').attr('class', 'container').append($div4).append($divRestart4)
    $section4 = $('<section>').attr('class', 'blog-page').append($container4)
    $('#show').append($section4)

}

var againButton4 = () => {
    $div4 = $('<div>').attr('class', 'col-5')
    divAgain4 = $('#again4').get()
    $divAgain4 = $(divAgain4)

    $container4 = $('<div>').attr('class', 'container').append($div4).append($divAgain4)
    $section4 = $('<section>').attr('class', 'blog-page').append($container4)
    $('#show').append($section4)

}
var showBeverageRestaurant = (x) => {
    $div4 = $('<div>').attr('class', 'col-5')
    divRestaurant4 = $('#beverage' + x).get()
    $divRestaurant4 = $(divRestaurant4)

    $container4 = $('<div>').attr('class', 'container').append($div4).append($divRestaurant4)
    $section4 = $('<section>').attr('class', 'blog-page').append($container4)
    $('#show').append($section4)

}




//code
$('.blog-page').hide()

//Rice
$('button#beverageselect').on('click', function() {
    $('#selection').hide()
    console.log('response')

    blank()
    beverageResult()
    console.log(allBeverageResult[0])
    showBeverageRestaurant(allBeverageResult[0])
    againButton4()


})
$('#again4').on('click', function() {
    $('#show').empty()
    blank()
    showBeverageRestaurant(allBeverageResult[1])
    restartButton4()
})
$('#restart4').on('click', function() {
    window.location.reload()
})