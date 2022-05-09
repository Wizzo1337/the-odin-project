let myLibrary = [];

class Book {
	constructor() {
		// the constructor...
	}
}

function displayBooks() {
	if ($input.value === '') {
		alert('don\'t leave blank!')
		return
	}
	let flexCont = document.querySelector('.flex-container')
	let newDiv = document.createElement('div')
	for (let i = 0; i < myLibrary.length; i++) {
		newDiv.textContent = myLibrary[i]
		flexCont.append(newDiv)
	}
}

let $button = document.querySelector('button')
let $input = document.querySelector('input')

$button.addEventListener('click', addBookToLibrary)
$input.addEventListener('keydown', enterSubmit)

function enterSubmit (e) {
	if(e.key === 'Enter') {
		if ($input.value !== '') {
			myLibrary.push($input.value)
		}
		displayBooks()
		$input.value = ''
		e.preventDefault()
	}
}

function addBookToLibrary(e) {
	myLibrary.push($input.value)
	displayBooks()
	$input.value = ''
	e.preventDefault()
}
