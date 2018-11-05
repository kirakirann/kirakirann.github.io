function changeText() {
	$('h1').html('This is Just a Test').css('color', 'white')
}

$('h1').click(changeText)

function changeImgColor() {
	$('img').attr('src', 'img/love2.png')
}

$('img').click(changeImgColor)