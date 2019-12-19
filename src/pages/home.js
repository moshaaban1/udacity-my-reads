import React from "react";
import { Link } from "react-router-dom";
import Book from "../components/Book";
import { upperCaseSplit } from "../utils/helpers";

function Home(props) {
   const { books } = props;
   const booksShelf = [
      books.filter(book => book.shelf === "currentlyReading"),
      books.filter(book => book.shelf === "read"),
      books.filter(book => book.shelf === "wantToRead")
   ];

   return (
      <div className="list-books">
         <div className="list-books-title">
            <h1>MyReads</h1>
         </div>
         {booksShelf.map((shelf, index) => {
            if (shelf.length)
               return (
                  <div
                     className="list-books-content"
                     key={"shelf_" + index + shelf}
                  >
                     <div>
                        <div className="bookshelf">
                           <h2 className="bookshelf-title">
                              {upperCaseSplit(shelf[0].shelf)}
                           </h2>
                           <div className="bookshelf-books">
                              <ol className="books-grid">
                                 {shelf.map(book => (
                                    <Book
                                       updateShelf={props.updateShelf}
                                       book={book}
                                       key={book.id}
                                       id={book.id}
                                       shelf={book.shelf}
                                       img={book.imageLinks.thumbnail}
                                       title={book.title}
                                       authors={book.authors}
                                    />
                                 ))}
                              </ol>
                           </div>
                        </div>
                     </div>
                  </div>
               );
         })}
         <div className="open-search">
            <Link to="/search">Add a book</Link>
         </div>
      </div>
   );
}

export default Home;
