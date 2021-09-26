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
 // Set up two arrays to partition the results  
  let availArray = [];
  let unavailArray = []; 
 // Set up a new array to store the partitioned results  
  const bookStatus = []; 
    books.forEach(book => {
// partition the results based on borrow status    
  const bookReturned = book.borrows[0].returned;
  if (bookReturned) {
    unavailArray.push(book);   
  } else {
    availArray.push(book);  
  } 
});
// return the array with partitioned results 
  bookStatus.push(availArray); 
  bookStatus.push(unavailArray); 
  return bookStatus; 
};

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
// find the accounts with an ID matching the borrow ID
  let account = accounts.find(acc => acc.id === borrow.id)
  return {...borrow, ...account}  
})
// limit results in array to 10
  .slice(0,10)
};

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
