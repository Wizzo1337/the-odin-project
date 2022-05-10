let myLibrary = [];

class Book {
	constructor(title, author, pageNum, read) {
		this.title = title;
		this.author = author;
		this.pageNum = pageNum;
		this.read = read;
	}
}

let fern = new Book('JRR Token', 'Where da Red Fern go', 69, true);

function displayBooks() {
	if ($title.value === '') {
		alert("don't leave blank!");
		return;
	}
	let $flexCont = document.querySelector('.flex-container');
	let newDiv = document.createElement('div');
	for (let i = 0; i < myLibrary.length; i++) {
		newDiv.textContent = myLibrary[i].title + myLibrary[i].author + myLibrary[i].pageNum;
		$flexCont.append(newDiv);
	}
}

let $submit = document.querySelector('#submit');
let $title = document.querySelector('#books');
let $author = document.querySelector('#author');
let $pages = document.querySelector('#pages');
let $modalContainer = document.querySelector('.modal-container');
let $newBook = document.querySelector('#newBook');
let $close = document.querySelector('.close');

$submit.addEventListener('click', submit);
$title.addEventListener('keydown', submit);
$author.addEventListener('keydown', submit);
$pages.addEventListener('keydown', submit);
$newBook.addEventListener('click', openModal);
$close.addEventListener('click', closeModal);
$modalContainer.addEventListener('click', closeModal);

function submit(e) {
	if (e.key === 'Enter' || e.button === 0) {
		if ($title.value !== '') {
			myLibrary.push(new Book($title.value, $author.value, $pages.value));
			$modalContainer.style.display = 'none';
		}
		displayBooks();
		$title.value = '';
		$author.value = '';
		$pages.value = '';
		e.preventDefault();
	}
}

function openModal() {
	$modalContainer.style.display = 'block';
}

function closeModal(e) {
	if (e.target === $modalContainer || e.target === $close) {
		$modalContainer.style.display = 'none';
	}
}
