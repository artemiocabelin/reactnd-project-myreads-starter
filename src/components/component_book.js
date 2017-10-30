import React, { Component }from 'react'
import ShelfChanger from './component_shelf_changer'

class Book extends Component {
    createImgUrl(imageLinks) {
        if(!imageLinks.thumbnail) {
            return imageLinks;
        } else {
            return imageLinks.thumbnail;
        }
    }

    renderAuthor(author) {
        return (
            <div key={author} className="book-authors">{author}</div>
        )
    }

    listAuthors(authors) {
        if(authors) {
            return authors.map(this.renderAuthor.bind(this));
        }
    }

    render() {
        const { book: { title, authors, shelf, imageLinks}, shelves, moveBook } = this.props;
        return (
            <li>
                <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.createImgUrl(imageLinks)})` }}></div>
                    <div className="book-shelf-changer">
                    <ShelfChanger book={this.props.book} shelf={shelf} shelves={shelves} moveBook={moveBook} />
                    </div>
                </div>
                <div className="book-title">{title}</div>
                    {this.listAuthors(authors)}
                </div>
            </li>
        )
    }
}

export default Book;