'use strict';

const bookList = [
    {
        id: 1,
        author: 'baks',
        title: 'lol'
    },
    {
        id: 2,
        author: 'Sara',
        title: 'style'
    },
    {
        id: 3,
        author: 'wilma',
        title: 'panna'
    }

];
// const searchInput = document.children[0].children[1].children[1];
// const searchField = document.getElementById('searchField');
// console.log(searchField);

// Input, beforeinput, keypress

searchField.addEventListener("keyup", handleKeyPress);

function handleKeyPress (e) {
    /*
    Ta emot/läsa av värdet i input
    skick värdet till searchbook
    searchBooks returnera en filtrerad lista
    filtrerade listan skickas till renderlist 
    */
    searchBooks(e.target.value);
}


function searchBooks(searchTerm) {
    const filteredList = [];

   for ( let i = 0; i < bookList.length; i++) {
    //const title = bookList[i].title.toLowerCase();
    const author = bookList[i].author.toLowerCase();
    
    if (author.indexOf(searchTerm.toLowerCase()) >= 0 ) {
        filteredList.push(bookList[i]);
    }
 
    renderBookList(filteredList);
   }
  
}

function renderBookList (bookList){



  const existingElement = document.querySelector(".book-list");
  console.log(existingElement);
  
  const root = document.getElementById('root');
  if (existingElement) {
    root.removeChild(existingElement);
  }


if (bookList.length > 0) {

  root.insertAdjacentHTML('beforeend', BookList(bookList)); 

}
}






