function getTotalBooksCount(books) {
  return Object.values(books).length; 
};

function getTotalAccountsCount(accounts) {
  return Object.keys(accounts).length; 
};

function getBooksBorrowedCount(books) {
  booksBorrowed = 0; 
  books.forEach(book => {
if (!book.borrows[0].returned) booksBorrowed++; 
  }); 
  return booksBorrowed; 
}

function sortByPopularity(aBook, bBook) {
  return aBook.count - bBook.count;   
};

function getMostCommonGenres(books) {
let newObj = {}; 
  books.forEach(book => {
if (newObj[book.genre] != null) {
  newObj[book.genre]++ ; 
  } else {
  newObj[book.genre] = 1;   
  } 
}); 

let newArray = []; 
for (const [key, value] of Object.entries(newObj)) {
  newArray.push({
    'name' : key,
    'count' : value
  }); 
}
newArray.sort((aBook,bBook) => bBook.count - aBook.count);
  return newArray
  .slice(0, 5);
};

function getMostPopularBooks(books) {
  return books
  .map((book) => {
  return {name: book.title, count: book.borrows.length}
   })
   .sort((aBook, bBook) => (aBook.count < bBook.count ? 1 : -1)).slice(0, 5)
 };

function getMostPopularAuthors(books, authors) {
  const newObj = authors
    .map(firstArray => ({
    ...firstArray, 
    bookCount: books
    .filter(secondArray => secondArray.authorId === firstArray.id).length,
    borrowCount: books
    .filter(secondArray => secondArray.authorId === firstArray.id)
    .reduce((acc, cur) => acc + cur.borrows.length, 0)
    }));
  const newAuthorArray = newObj
    .map(popAuthors => {
    return {name: `${popAuthors.name.first} ${popAuthors.name.last}`, count: popAuthors.borrowCount};  
  });
  function sortAuthorArray(authorArray) {
    return authorArray.sort((bCount, aCount) => aCount.count - bCount.count)
    .slice(0,5); 
  }; 
  return sortAuthorArray(newAuthorArray);
}; 












module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
