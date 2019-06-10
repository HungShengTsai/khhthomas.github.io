$(document).ready(function() {

    //變數
    var allRiceResult = []

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
    var riceResult = () => {
        for (i = 1; i <= 26; i++) {
            allRiceResult.push(i)
        }
        var n = rand(2000, 4000)
        for (i = 1; i <= n; i++) {
            var r = rand(0, 25)
            var temp = allRiceResult[r]
            allRiceResult[r] = allRiceResult[0]
            allRiceResult[0] = temp
        }
    }



    //產生物件
    var blank = () => {
        divBlank = $('#1').get()
        $divBlank = $(divBlank)
        $container = $('<div>').attr('class', 'container').append($divBlank)
        $section = $('<section>').attr('class', 'blog-page').append($container)
        $('#show').append($section)
    }

    var restartButton = () => {
        $div = $('<div>').attr('class', 'col-5')
        divRestart = $('#restart').get()
        $divRestart = $(divRestart)

        $container = $('<div>').attr('class', 'container').append($div).append($divRestart)
        $section = $('<section>').attr('class', 'blog-page').append($container)
        $('#show').append($section)

    }

    var againButton = () => {
        $div = $('<div>').attr('class', 'col-5')
        divAgain = $('#again').get()
        $divAgain = $(divAgain)

        $container = $('<div>').attr('class', 'container').append($div).append($divAgain)
        $section = $('<section>').attr('class', 'blog-page').append($container)
        $('#show').append($section)

    }
    var showRiceRestaurant = (x) => {
        $div = $('<div>').attr('class', 'col-5')
        divRestaurant = $('#rice' + x).get()
        $divRestaurant = $(divRestaurant)

        $container = $('<div>').attr('class', 'container').append($div).append($divRestaurant)
        $section = $('<section>').attr('class', 'blog-page').append($container)
        $('#show').append($section)

    }




    //code
    $('.blog-page').hide()

    //Rice
    $('a#riceselect').on('click', function() {
        $('#selection').hide()
        console.log('response')

        blank()
        riceResult()
        console.log(allRiceResult[0])
        showRiceRestaurant(allRiceResult[0])
        againButton()


    })
    $('#again').on('click', function() {
        $('#show').empty()
        blank()
        showRiceRestaurant(allRiceResult[1])
        restartButton()
    })
    $('#restart').on('click', function() {
        window.location.reload()
    })



})