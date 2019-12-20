import React from "react";
import { Link } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";
import * as BooksAPI from "../BooksAPI";
import Book from "../components/Book";

class Search extends React.Component {
   state = {
      queryResults: []
   };

   queryBooks = query => {
      let queryResults = [];

      if (query) {
         BooksAPI.search(query).then(results => {
            if (results && results.length) {
               queryResults = results.map(result => {
                  result.shelf = this.addBookShelf(result);
                  return result;
               });
               this.setState({
                  queryResults
               });
            } else {
               this.setState({
                  queryResults: []
               });
               console.log("Nothing");
            }
         });
      }
   };

   addBookShelf(result) {
      let hasShelf = this.props.books.filter(book => book.id === result.id);
      return hasShelf.length ? hasShelf[0].shelf : "none";
   }

   render() {
      return (
         <div className="search-books">
            <div className="search-books-bar">
               <Link className="close-search" to="/">
                  Close
               </Link>
               <div className="search-books-input-wrapper">
                  <DebounceInput
                     debounceTimeout={2000}
                     type="text"
                     placeholder="Search by title or author"
                     onChange={event => this.queryBooks(event.target.value)}
                  />
               </div>
            </div>
            {this.state.queryResults.length ? (
               <div className="search-books-results">
                  <ol className="books-grid">
                     {this.state.queryResults.map(book => (
                        <Book
                           updateShelf={this.props.updateShelf}
                           book={book}
                           key={book.id}
                           id={book.id}
                           shelf={book.shelf}
                           img={book.imageLinks && book.imageLinks.thumbnail}
                           title={book.title}
                           authors={book.authors}
                        />
                     ))}
                  </ol>
               </div>
            ) : null}
         </div>
      );
   }
}

export default Search;
