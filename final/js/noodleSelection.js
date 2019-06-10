$(document).ready(function() {

    //變數
    var allNoodleResult = []

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
    var noodleResult = () => {
        for (i = 1; i <= 5; i++) {
            allNoodleResult.push(i)
        }
        var n = rand(2000, 4000)
        for (i = 1; i <= n; i++) {
            var r = rand(0, 4)
            var temp = allNoodleResult[r]
            allNoodleResult[r] = allNoodleResult[0]
            allNoodleResult[0] = temp
        }
    }



    //產生物件
    var blank = () => {
        divBlank = $('#2').get()
        $divBlank = $(divBlank)
        $container = $('<div>').attr('class', 'container').append($divBlank)
        $section = $('<section>').attr('class', 'blog-page').append($container)
        $('#show').append($section)
    }

    var restartButton2 = () => {
        $div2 = $('<div>').attr('class', 'col-5')
        divRestart2 = $('#restart2').get()
        $divRestart2 = $(divRestart2)

        $container2 = $('<div>').attr('class', 'container').append($div2).append($divRestart2)
        $section2 = $('<section>').attr('class', 'blog-page').append($container2)
        $('#show').append($section2)

    }

    var againButton2 = () => {
        $div2 = $('<div>').attr('class', 'col-5')
        divAgain2 = $('#again2').get()
        $divAgain2 = $(divAgain2)

        $container2 = $('<div>').attr('class', 'container').append($div2).append($divAgain2)
        $section2 = $('<section>').attr('class', 'blog-page').append($container2)
        $('#show').append($section2)

    }
    var showNoodleRestaurant = (x) => {
        $div2 = $('<div>').attr('class', 'col-5')
        divRestaurant2 = $('#noodle' + x).get()
        $divRestaurant2 = $(divRestaurant2)

        $container2 = $('<div>').attr('class', 'container').append($div2).append($divRestaurant2)
        $section2 = $('<section>').attr('class', 'blog-page').append($container2)
        $('#show').append($section2)

    }




    //code
    $('.blog-page').hide()
        //Noodle
    $('a#noodleselect').on('click', function() {
        $('#selection').hide()
        console.log('response')

        blank()
        noodleResult()
        console.log(allNoodleResult[0])
        showNoodleRestaurant(allNoodleResult[0])
        againButton2()


    })
    $('#again2').on('click', function() {
        $('#show').empty()
        blank()
        showNoodleRestaurant(allNoodleResult[1])
        restartButton2()
    })
    $('#restart2').on('click', function() {
        window.location.reload()
    })



})