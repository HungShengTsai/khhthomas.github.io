console.log('程式執行')

var compute = (array) => {
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        sum += array[i]
    }
    var avg = sum / array.length
        //但是函數只能多對一，現在有兩個結果：sum,avg，不能回傳兩個值，所以用object把它包起來
    var result = {
        'sum': sum,
        'avg': avg
    }
    return result
}

$('#clear').on('click', () => {
    $('#data').empty()
})

$('#input').on('click', () => {
    var n = $('#input-text').val()
    var $item = $('<div>').attr('class', 'item').text(n)
    var $col = $('<div>').attr('class', 'col-1').append($item)
    $('#data').append($col)
})

$('#compute').on('click', () => {
    // 取出網頁所有的 item
    //$items = $('.item')
    //     var sum = 0
    //         // 將所有item的 text 變成數字相加
    //     for (var i = 0; i < $items.length; i++) {
    //         var str = $($items[i]).text()
    //         sum = sum + Number(str)
    //     }
    //     // 計算平均
    //     var avg = sum / $items.length

    //     // 輸出結果到網頁
    //     $('#result-sum').val(sum)
    //     $('#result-avg').val(avg)
    var array = []
    $('.item').each(function(index) {
        var value = Number($(this).text())
        array.push(value)

        var result = compute(array)
            // 輸出結果到網頁
        $('#result-sum').val(result.sum)
        $('#result-avg').val(result.avg)

    })
})