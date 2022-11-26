const url = "http://gik2f8-labs.herokuapp.com/books";

async function getAll() {
	const res = await fetch(url);
	const json = await res.json();
	return json;
	/* return fetch(url).then((result) => result.json())
    .then((jsonData) => jsonData); */
}
