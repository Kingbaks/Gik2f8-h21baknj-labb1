const bookDetails = (book) => {
	let html = `
    <div id="bookDetail" class="book__details top-3 right-40 rounded-lg bg-slate-600 p-4 w-4/5 top-20 mx-5 mx-auto
    flex flex-row text-center text-black-400 font-semibold">
        <img src="${book.coverImage}" alt="Knas inget o se här" "max-w-md"

        
        <div class="detail__list">
            <ul class="list">
                <li>Title: ${book.title}</li>
                <li>Author: ${book.author}</li>
                <li>Pages: ${book.pages}</li>
                <li>Release date: ${book.releaseDate}</li>
            </ul>
        </div>
    </div>
    `;
	console.log("skapade Details");

	return html;
};
