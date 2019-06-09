$(document).ready(function() {

    //變數
    var allOtherResult = []

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
    var otherResult = () => {
        for (i = 1; i <= 15; i++) {
            allOtherResult.push(i)
        }
        var n = rand(2000, 4000)
        for (i = 1; i <= n; i++) {
            var r = rand(0, 14)
            var temp = allOtherResult[r]
            allOtherResult[r] = allOtherResult[0]
            allOtherResult[0] = temp
        }
    }



    //產生物件
    var blank = () => {
        divBlank = $('#3').get()
        $divBlank = $(divBlank)
        $container = $('<div>').attr('class', 'container').append($divBlank)
        $section = $('<section>').attr('class', 'blog-page').append($container)
        $('#show').append($section)
    }

    var restartButton3 = () => {
        $div3 = $('<div>').attr('class', 'col-5')
        divRestart3 = $('#restart3').get()
        $divRestart3 = $(divRestart3)

        $container3 = $('<div>').attr('class', 'container').append($div3).append($divRestart3)
        $section3 = $('<section>').attr('class', 'blog-page').append($container3)
        $('#show').append($section3)

    }

    var againButton3 = () => {
        $div3 = $('<div>').attr('class', 'col-5')
        divAgain3 = $('#again3').get()
        $divAgain3 = $(divAgain3)

        $container3 = $('<div>').attr('class', 'container').append($div3).append($divAgain3)
        $section3 = $('<section>').attr('class', 'blog-page').append($container3)
        $('#show').append($section3)

    }
    var showOtherRestaurant = (x) => {
        $div3 = $('<div>').attr('class', 'col-5')
        divRestaurant3 = $('#other' + x).get()
        $divRestaurant3 = $(divRestaurant3)

        $container3 = $('<div>').attr('class', 'container').append($div3).append($divRestaurant3)
        $section3 = $('<section>').attr('class', 'blog-page').append($container3)
        $('#show').append($section3)

    }




    //code
    $('.blog-page').hide()
        //Other
    $('button#otherselect').on('click', function() {
        $('#selection').hide()
        console.log('response')

        blank()
        otherResult()
        console.log(allOtherResult[0])
        showOtherRestaurant(allOtherResult[0])
        againButton3()


    })
    $('#again3').on('click', function() {
        $('#show').empty()
        blank()
        showOtherRestaurant(allOtherResult[1])
        restartButton3()
    })
    $('#restart3').on('click', function() {
        window.location.reload()
    })



})