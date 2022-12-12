"use strict";

let bookList = [];

window.addEventListener("load", () => {
	getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener("keyup", (e) =>
	renderBookList(
		bookList.filter(({ title, author }) => {
			const searchTerm = e.target.value.toLowerCase();
			return (
				title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				author.toLowerCase().includes(searchTerm.toLowerCase())
			);
		})
	)
);

function renderBookList(bookList) {
	const existingElement = document.querySelector(".book-list");
	// const existingElement = document.querySelector(".bookList");
	// console.log(existingElement);

	const root = document.getElementById("root");
	if (existingElement) {
		root.removeChild(existingElement);
	}

	if (bookList.length > 0 && searchField.value) {
		root.insertAdjacentHTML("beforeend", BookList(bookList));
	}

	const bok = document.querySelector(".book-list");

	if (bok) {
		bok.addEventListener("mouseover", function (e) {
			console.log("hovraöver");
			if (e.target && e.target.matches("li.book-list__item")) {
				const bookId = e.target.value;
				let book = bookList.find((book) => book.id == bookId);
				existingElement && root.removeChild(existingElement);
				bookList.length > 0 &&
					searchField.value &&
					root.insertAdjacentHTML("beforeend", bookDetails(book));
			}
		});

		bok.addEventListener("mouseout", function (e) {
			let bookDetail = document.querySelector("#bookDetail");
			if (bookDetail) bookDetail.remove();
		});
	}
}
