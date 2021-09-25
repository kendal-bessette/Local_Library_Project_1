function findAuthorById(authors, id) {
  return authors.find(authors => {
  return authors.id === id;
  }); 
};

function findBookById(books, id) {
  return books.find(books => {
  return books.id === id;   
  }); 
};

function partitionBooksByBorrowedStatus(books) {
  let availArray = [];
  let unavailArray = []; 
  const bookStatus = []; 
    books.forEach(book => {
  const bookReturned = book.borrows[0].returned;
  if (bookReturned) {
    unavailArray.push(book);   
  } else {
    availArray.push(book);  
  } 
});
  bookStatus.push(availArray); 
  bookStatus.push(unavailArray); 
  return bookStatus; 
};

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
  let account = accounts.find(acc => acc.id === borrow.id)
  return {...borrow, ...account}  
})
  .slice(0,10)
};

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
