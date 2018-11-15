

$('#myForm').submit(handleSubmit)

function handleSubmit(event) {
	event.preventDefault()
	console.log(event)
	var input = $('#name-input').val()

	$('#target').html(input)
}