'use strict';

console.log('test');



const bookList = [
    {
        id: 1,
        author: 'baks',
        title: 'lol'
    },
    {
        id: 2,
        author: 'samie',
        title: 'doggie style'
    }
];
const searchInput = null;

function handleKeyPress (input) {
    /*
    Ta emot/läsa av värdet i input
    skick värdet till searchbook
    searchBooks returnera en filtrerad lista
    filtrerade listan skickas till renderlist 
    */
    searchBooks(input);
}
let filteredList = [];

function searchBooks(searchTerm) {

   for ( let i = 0; i < bookList.length; i++) {
    //const title = bookList[i].title.toLowerCase();
    const author = bookList[i].author.toLowerCase();
    
    /*if (title.indexOf(searchTerm.toLowerCase()) >= 0 ) {
        console.log('match?');
        filteredList.push(bookList[0]);
    }*/
    if (author.indexOf(searchTerm.toLowerCase()) >= 0 ) {
        console.log('match?');
        filteredList.push(bookList[i]);
    }
   }
   renderbookList(filteredList);


}

handleKeyPress('a');

function renderbookList (list){
console.log(list);
}







