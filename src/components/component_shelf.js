import _ from 'lodash'
import React, { Component } from 'react'
import Book from './component_book'

export default class Shelf extends Component {
    renderBook(book) {
        const { shelf, moveBook, shelves} = this.props;
        if(book.shelf === shelf.shelfKey) {
            return (
                <Book key={book.id} shelf={shelf} book={book} shelves={shelves} moveBook={moveBook}/>
            )
        }
    }
    
    render() {
        const { books, shelf } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.shelfTitle}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {_.map(books, this.renderBook.bind(this))}
                </ol>
                </div>
            </div>
        )
    }
}

