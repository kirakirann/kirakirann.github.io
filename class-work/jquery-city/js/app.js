// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

// $('#first').click(bigimage1)
// $('#second').click(bigimage2)
// $('#third').click(bigimage3)
// $('#fourth').click(bigimage4)

// function bigimage1() {
// 	$('#bigimage').attr('src', 'img/1.jpg')
	
// }

// function bigimage2() {
// 	$('#bigimage').attr('src', 'img/2.jpg')
	
// }

// function bigimage3() {
// 	$('#bigimage').attr('src', 'img/3.jpg')
	
// }

// function bigimage4() {
// 	$('#bigimage').attr('src', 'img/4.jpg')
	
// }




function changeImage() {
	// need. to obtain scr attribute from specific image clicked

	var src = $(this).attr('src')

	// output: #bigimage has changed

	$('#bigimage').attr('src', src)
}

$('.thumb').click(changeImage)