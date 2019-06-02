// 當文件已經全載入至記憶體時，開始執行程式
$(document).ready(function() {

    //清空畫面
    $('#product-list').empty()
    $('#pagination').hide()

    var items = null
    var pageCount = 20
    var showItem = (page) => {
        if (items == null) return

        var start = (page - 1) * pageCount
        var end = start + pageCount - 1
        $('#product-list').empty()
        for (var i = start; i <= end; i++) {
            if (items[i] == null) {
                return
            }
            newItem(items[i])

        }
    }


    //產生物件
    var newItem = (item) => {
            $img = $('<img>').attr('class', 'image').attr('src', item.image)
            $h3 = $('<h3>').attr('class', 'name').text(item.name)
            $p = $('<p>').attr('class', 'price').text('NT$' + item.price)

            $item = $('<div>').attr('class', 'item').append($img).append($h3).append($p)

            $col = $('<div>').attr('class', 'col-*').append($item)

            $('#product-list').append($col)
        }
        //分頁欄
    var newPage = (n) => {
        var pageNum = n / 20
        if (n % 20 != 0) {
            pageNum = Math.floor(pageNum) + 1
        } else {
            pageNum = pageNum
        }

        $('#page-number').empty()

        $la = $('<a>').attr('class', 'page-link').attr('href', '#').attr('tabindex', '-1').attr('aria-disabled', 'true').text('«')
        $lli = $('<li>').attr('class', 'page-item').addClass('disabled').attr('id', 'front').append($la)
        $('#page-number').append($lli)



        //插入分頁數字
        for (var i = 1; i <= pageNum; i++) {

            var stringnow = ((i == 1) ? 'now' : '')
            $a = $('<a>').attr('class', 'page-link').attr('href', '#').attr('id', '' + stringnow).text(i)

            $a.on('click', function() {
                var i = $(this).text()
                showItem(Number(i))
                $('a.page-link').attr('id', '')
                $('li.page-item').attr('class', 'page-item')
                $(this).attr('id', 'now')
                $(this).parent().attr('class', 'page-item active')
                if (Number($('a#now').text()) != 1) {
                    $('li#front').attr('class', 'page-item')
                } else {
                    $('li#front').attr('class', 'page-item disabled')
                }
                if (Number($('a#now').text()) >= (pageNum)) {
                    $('li#back').attr('class', 'page-item disabled')
                } else {
                    $('li#back').attr('class', 'page-item')
                }

            })
            var stringactive = ((i == 1) ? ' active' : '')
            $li = $('<li>').attr('class', 'page-item' + stringactive).append($a)
            $('#page-number').append($li)

            if (Number($('a#now').text()) != 1) {
                $('li#front').attr('class', 'page-item')
            } else {
                $('li#front').attr('class', 'page-item disabled')
            }
            if (Number($('a#now').text()) >= (pageNum)) {
                $('li#back').attr('class', 'page-item disabled')
            } else {
                $('li#back').attr('class', 'page-item')
            }



        }
        //上一頁
        $la.on('click', function() {
                var i = $('a#now').text()
                var x = Number(i) - 1
                showItem(x)
                $('a#now').parent().prev().children().attr('id', 'now')
                $('a#now').parent().next().children().attr('id', '')
                $('a#now').parent().attr('class', 'page-item active')
                $('a#now').parent().next().attr('class', 'page-item')
                if (Number($('a#now').text()) != 1) {
                    $('li#front').attr('class', 'page-item')
                } else {
                    $('li#front').attr('class', 'page-item disabled')
                }
                if (Number($('a#now').text()) >= (pageNum)) {
                    $('li#back').attr('class', 'page-item disabled')
                } else {
                    $('li#back').attr('class', 'page-item')
                }
            }

        )


        $ra = $('<a>').attr('class', 'page-link').attr('href', '#').text('»')

        //下一頁
        $ra.on('click', function() {
            var i = $('a#now').text()
            var x = Number(i) + 1
            showItem(x)
            $('a#now').parent().next().children().attr('id', 'now')
            $('a#now').parent().prev().children().attr('id', '')
            $('a#now').parent().attr('class', 'page-item active')
            $('a#now').parent().prev().attr('class', 'page-item')
            if (Number($('a#now').text()) >= (pageNum)) {
                $('li#back').attr('class', 'page-item disabled')
            } else {
                $('li#back').attr('class', 'page-item')
            }
            if (Number($('a#now').text()) != 1) {
                $('li#front').attr('class', 'page-item')
            } else {
                $('li#front').attr('class', 'page-item disabled')
            }
        })
        $rli = $('<li>').attr('class', 'page-item').attr('id', 'back').append($ra)
        $('#page-number').append($rli)

    }


    //取得資料
    var getProduct = () => {
        $.get('https://js.kchen.club/B07203038/query', function(response) {
            //確定server（伺服器）有回傳資料    
            if (response) {
                //確定資料庫有回傳資料
                if (response.result) {

                    //將資料顯示到頁面上
                    items = response.items

                    // 加了分頁效果，預設顯示第一頁
                    showItem(1)

                    // 顯示分頁和設定分頁的函式
                    $('#pagination').show()
                    newPage(items.length)
                } else {
                    $('#message').text('資料庫查無資料')
                    $('#myModal').modal('show')
                }
            } else {
                $('#message').text('伺服器出錯')
                $('#dialog').modal('show')
            }

            console.log(response)

        })
    }
    getProduct()

})