 /*
	
	Add .click() handlers for each of the boxes:

	A) Boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out

	B) Boxes #m10, #m20, and #m30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out

	C) #red and #blue should change the background color of #out to red and blue, respectively
	
	D) #out should change the background of #out to white, and set the value back to zero

	HINT: define a variable, var count = 0 outside of any functions. Use this variable to keep track of what to display inside of #out
	Ex: when the user clicks #a10, add 10 to the "count" and then reflect this change in the HTML

	jQuery Methods Needed:
	- .click()
	- .html()
	- .css()

*/


var total = 0 


function addTen() {
	total = total + 10
	$('#out').html(total)
}

$('#a10').click(addTen)


function addTwenty() {
	total = total + 20
	$('#out').html(total)
}
$('#a20').click(addTwenty)


function addThirty() {
	total = total + 30
	$('#out').html(total)
}
$('#a30').click(addThirty)


function minusTen() {
	total = total - 10
	$('#out').html(total)
}
$('#m10').click(minusTen)


function minusTwenty() {
	total = total - 20
	$('#out').html(total)
}
$('#m20').click(minusTwenty)


function minusThirty() {
	total = total - 30
	$('#out').html(total)
}
$('#m30').click(minusThirty)


function changeRed() {
	$('#out').css('background', 'red')
}
$('#red').click(changeRed)


function changeBlue() {
	$('#out').css('background', 'blue')
}
$('#blue').click(changeBlue)


function reset() {
	$('#out').css('background', 'white')
	total = 0
	$('#out').html(total)
}
$('#out').click(reset)






