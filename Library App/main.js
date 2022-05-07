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

function addBookToLibrary() {
	myLibrary.push($input.value)
	displayBooks()
	$input.value = ''
}
