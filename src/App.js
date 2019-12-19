import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Search from "./pages/search";
import Home from "./pages/home";
import "./App.css";

class BooksApp extends React.Component {
   state = {
      books: []
   };

   componentDidMount() {
      BooksAPI.getAll().then(books => {
         this.setState({
            books
         });
      });
   }

   updateShelf = (shelf, book) => {
      book.shelf = shelf;

      BooksAPI.update(book.id, shelf).then(result => {
         this.setState(state => ({
            books: state.books.filter(b => b.id !== book.id).concat([book])
         }));
      });
   };

   render() {
      return (
         <div className="app">
            <BrowserRouter>
               <Route
                  exact
                  path="/"
                  render={() => (
                     <Home
                        books={this.state.books}
                        updateShelf={this.updateShelf}
                     />
                  )}
               />
               <Route
                  path="/search"
                  render={() => (
                     <Search
                        books={this.state.books}
                        updateShelf={this.updateShelf}
                     />
                  )}
               />
            </BrowserRouter>
         </div>
      );
   }
}

export default BooksApp;
