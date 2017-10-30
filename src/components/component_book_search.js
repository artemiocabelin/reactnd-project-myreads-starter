import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../services/BooksAPI'
import Book from './component_book'
import { search_terms } from '../configurations/config_search_terms'

export default class BookSearch extends Component{
    state = {
        query: '',
        results: []
    }

    updateSearchResults(e) {
        const value = e.target.value;
        this.setState({query: value});
        if(search_terms.includes(value)) {
            BooksAPI.search(value, 40).then((data) => {this.setState({results: data});})
        }
    }

    renderBook(book) {
        let { books, moveBook, shelves} = this.props;
        let currentBook = book;
        if(books.hasOwnProperty(currentBook.id)) {
            currentBook = books[currentBook.id]
        }
        return (
            <Book key={book.id} book={currentBook} shelves={shelves} moveBook={moveBook}/>
        )
    }
    
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(e) => { this.updateSearchResults(e) }}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.results.map(this.renderBook.bind(this))}
                    </ol>
                </div>
            </div>
        )
    }
}
