console.log('程式執行')

$('#RunCheck').on('click', function() {
    console.log('被按到')
    var age = $('#InputAge').val()
    if (age >= 18) {
        $('#output').val('已成年')
    } else {
        $('#output').val('未成年')
    }
})