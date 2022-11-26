'use strict';

const bookList = [
    {
        id: 1,
        author: 'baks',
        title: 'Ska visa dig hur du blir bäst'
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

// another way to use the searchfiled 
/* searchField.addEventListener("keyup", (e) =>
renderBookList(
    bookList.filter(({author, title}) =>  {
        const searchTerm = e.target.value.toLowerCase();
        return    author.toLowerCase().indexOf(searchTerm.toLowerCase())>= 0 ||   title.toLowerCase().indexOf(searchTerm)>= 0 ); */


function searchBooks(searchTerm) {
    //const filteredList = [];
     const filteredList = bookList.filter(({author, title}) =>  author.toLowerCase().indexOf(searchTerm.toLowerCase())>= 0 || 
      title.toLowerCase().indexOf(searchTerm.toLowerCase())>= 0 );

  /*  for ( let i = 0; i < bookList.length; i++) {
    //const title = bookList[i].title.toLowerCase();
    const author = bookList[i].author.toLowerCase();
    
    if (author.indexOf(searchTerm.toLowerCase()) >= 0 ) {
        filteredList.push(bookList[i]);
    } */
     renderBookList(filteredList);
   
  
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






