import _ from 'lodash';
import React from 'react'
import { Route } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import '../styles/App.css'

import ShelfList from './component_shelf_list'
import BookSearch from './component_book_search'
import { shelves } from '../configurations/config_shelves'
import { books } from '../configurations/config_books'

class BooksApp extends React.Component {
  state = {
    shelves: {},
    books: {}
  }

  componentDidMount() {
    this.setState({shelves})
    this.setState({books})
  }

  moveBook(value, bookId, book) {
    const { books } = this.state;
    if(books.hasOwnProperty(bookId)) {
      this.changeShelfValue(value, bookId);
    } else {
      this.addBookToState(value, bookId, book);
    }
  }

  changeShelfValue(value, bookId) {
    const { books } = this.state;
    let newBooksState = books;
    newBooksState[bookId]['shelf'] = value;
    this.setState((state) => ({
      books: newBooksState
    }));
  }

  addBookToState(value, bookId, book) {
    const { books } = this.state;
    let newBooksState = books;
    newBooksState[bookId] = {
      id: book.id,
      title: book.title,
      imageLinks: book.imageLinks.thumbnail,
      authors: book.authors,
      shelf: value
    };
    this.setState({books: newBooksState});
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <BookSearch shelves={this.state.shelves} books={this.state.books} moveBook={this.moveBook.bind(this)} />
        )} />
        <Route exact path="/" render={() => (
          <ShelfList shelves={this.state.shelves} books={this.state.books} moveBook={this.moveBook.bind(this)} />
        )} />
      </div>
    )
  }
}

export default BooksApp
