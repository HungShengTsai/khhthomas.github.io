//產生物件的code
var newItem = (item) => {
    $img = $('<img>').attr('class', 'image').attr('src', item.image)
    $h3 = $('<h3>').attr('class', 'name').text(item.name)
    $p = $('<p>').attr('class', 'price').text('NT$' + item.price)

    $item = $('<div>').attr('class', 'item').append($img).append($h3).append($p)

    $col = $('<div>').attr('class', 'col-*').append($item)

    $('#product-list').append($col)
}

$('#clear').on('click', () => {
    $('#product-list').empty()
})

$('#query').on('click', function() {
    $.get('https://khhthomas.github.io/javascript:front-end%20application/product.json', function(response) {
        //確定server（伺服器）有回傳資料    
        if (response) {
            //確定資料庫有回傳資料
            if (response.result) {
                var items = response.data
                for (var i = 0; i < items.length; i++) {
                    newItem(items[i])
                }
            } else {
                $('#message').text('資料庫查無資料')
                $('#myModal').modal('show')
            }
        } else {
            $('#message').text('伺服器出錯')
            $('#dialog').modal('show')
        }

        console.log(response)
    }, "json")
})