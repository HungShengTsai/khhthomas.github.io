console.log('程式執行')

$('#RunCheck').on('click', () => {
    var n = $('#Input').val()
    var isPrime = true
    for (i = 2; i <= n - 1; i++) {
        if (n % i == 0) {
            isPrime = false
            break
        }
    }

    if (isPrime) {
        $('#output').val('是質數')
    } else {
        $('#output').val('是合數')
    }
})