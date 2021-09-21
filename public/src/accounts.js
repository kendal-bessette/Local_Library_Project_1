function findAccountById(accounts, id) {
  return accounts.find(accounts => {
  return accounts.id === id;
  }); 
};

function sortAccountsByLastName(accounts) {
  return accounts.sort((aName,bName) => (aName.name.last > bName.name.last) ? 1 : -1); 
};

function getTotalNumberOfBorrows(account, books) {
let counter = 0; books
  .forEach(book => book.borrows.forEach(borrow => account.id === borrow.id && counter++))
  return counter; 
};

function getBooksPossessedByAccount(account, books, authors) {
  let booksBorrowed= [];
  books.forEach(book => {
    let newArray = book.borrows;
    if (newArray.find(borrow => borrow.id === account.id && !borrow.returned)) {
      booksBorrowed.push(book);
    };
  });
  
  booksBorrowed.forEach(book =>{
    let author = authors.find(person => person.id === book.authorId);
    book['author'] = author;
  });
  return booksBorrowed;
};

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
