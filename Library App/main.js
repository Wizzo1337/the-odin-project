class Book {
	constructor(title, author, pageNum, read) {
		this.title = title;
		this.author = author;
		this.pageNum = pageNum;
		this.read = read;
	}
}

let fern = new Book('JRR Token', 'Where da Red Fern go', 69, true);

let $submit = document.querySelector('#submit');
let $title = document.querySelector('#books');
let $author = document.querySelector('#author');
let $pages = document.querySelector('#pages');
let $readStatus = document.querySelector('#readStatus');
let $modalContainer = document.querySelector('.modal-container');
let $newBook = document.querySelector('#newBook');
let $close = document.querySelector('.close');

$submit.addEventListener('click', submit);
$submit.addEventListener('keydown', submit);
$readStatus.addEventListener('change', checked);
$newBook.addEventListener('click', openModal);
$close.addEventListener('click', closeModal);
$modalContainer.addEventListener('click', closeModal);

let myLibrary = [];

function displayBooks() {
	if ($title.value === '' || $author.value === '' || $pages.value === '') {
		console.log("don't leave blank!");
		return;
	}

	let $flexCont = document.querySelector('.flex-container');
	let newDiv = document.createElement('div');
	let $div = document.querySelector('div');
	let newUl = document.createElement('ul');
	let $ul = document.querySelector('ul');
	let newLi = document.createElement('li');
	let newBtn = document.createElement('button');

	for (let i = myLibrary.length - 1; i < myLibrary.length; i++) {
		$flexCont.appendChild(newDiv);
		newDiv.classList.add(`index${i}`);
		newDiv.appendChild(newUl);
		newLi.textContent = `Title: ${myLibrary[i].title}`;
		newUl.appendChild(newLi);
		let newLiClone = newLi.cloneNode();
		newUl.appendChild(newLiClone);
		newLiClone.textContent = `Author: ${myLibrary[i].author}`;
		let newLiClone2 = newLi.cloneNode();
		newUl.appendChild(newLiClone2);
		newLiClone2.textContent = `Pages: ${myLibrary[i].pageNum}`;
		let newLiClone3 = newLi.cloneNode();
		newUl.appendChild(newLiClone3);
		newLiClone3.textContent = `Read: ${myLibrary[i].read}`;
		newUl.appendChild(newBtn);
		newBtn.textContent = 'Remove Book';
		newBtn.classList.add(`removeBook${i}`);
		let $removeBookBtn = document.querySelector(`.removeBook${i}`)
		$removeBookBtn.addEventListener('click', function () {
			document.querySelector(`.index${i}`).remove()
		})
	}
}



function submit(e) {
	e.preventDefault();
	if (e.key === 'Enter' || e.button === 0) {
		if ($title.value !== '' && $author.value !== '' && $pages.value !== '') {
			myLibrary.push(new Book($title.value, $author.value, $pages.value, $readStatus.checked));
			$modalContainer.style.display = 'none';
		}
		displayBooks();
		$title.value = '';
		$author.value = '';
		$pages.value = '';
		$readStatus.checked = false;
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

function checked(e) {
	if (e.target.checked) {
		return true;
	} else {
		return false;
	}
}
