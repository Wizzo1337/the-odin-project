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

let $submit = document.querySelector('#submit')
let $input = document.querySelector('input')
let $myModalContainer = document.querySelector('.myModalContainer')
let $newBook = document.querySelector('#newBook')
let $close = document.querySelector('.close')

$submit.addEventListener('click', addBookToLibrary)
$input.addEventListener('keydown', enterSubmit)
$newBook.addEventListener('click', openModal)
$close.addEventListener('click', closeModal)

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

function openModal() {
	$myModalContainer.style.display = 'block';
}

function closeModal () {
	$myModalContainer.style.display = 'none';
}
