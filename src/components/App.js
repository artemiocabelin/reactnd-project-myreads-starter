import _ from 'lodash';
import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from '../services/BooksAPI'
import '../styles/App.css'

import ShelfList from './component_shelf_list'
import BookSearch from './component_book_search'
import { shelves } from '../configurations/config_shelves'

class BooksApp extends React.Component {
  state = {
    shelves: {},
    books: {}
  }

  componentDidMount() {
    this.setState({shelves})
    this.getAllBooks()
  }

  getAllBooks() {
    BooksAPI.getAll().then(data => { this.setState({ books: _.mapKeys(data, 'id') }) })
  }

  moveBook(value, book) {
    const { books } = this.state;
    books.hasOwnProperty(book.id) ? this.changeShelfValue(value, book) : this.addBookToState(value, book);
  }

  changeShelfValue(value, book) {
    const { books } = this.state;
    let newBooksState = books;
    newBooksState[book.id]['shelf'] = value;
    BooksAPI.update(book, value).then(this.setState({ books: newBooksState }))
  }

  addBookToState(value, book) {
    const { books } = this.state;
    let newBooksState = books;
    let newBook = book;
    newBook['shelf'] = value;
    newBooksState[newBook.id] = newBook;
    BooksAPI.update(book, value).then(this.setState({books: newBooksState}))
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
