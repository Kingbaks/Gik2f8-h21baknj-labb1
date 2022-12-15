const url = "http://gik2f8-labs.herokuapp.com/books";

async function getAll() {
	const result = await fetch(url)
		.then((result) => result.json())
		.catch((e) => e);

	return result;
}

// async function get
async function getBookDetails(id) {
	const result = await fetch(url + "/" + id)
		.then((result) => result.json())
		.catch((e) => e);
	console.log("hämtade book från api");
	return result;
}

// try with

// async function getBookDetails(id) {
// 	const result = await fetch("http://gik2f8-labs.herokuapp.com/books")
// 		.then((result) => result.json())
// 		.catch((e) => e);
// 	console.log(result);
// 	return result;
// }
