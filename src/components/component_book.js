import React, { Component }from 'react'
import ShelfChanger from './component_shelf_changer'

class Book extends Component {
    createImgUrl(imageId, imageToken) {
        const booksUrl = 'http://books.google.com/books/content?id=';
        const imgTokenVar = '&printsec=frontcover&img=1&zoom=1&imgtk=';
        const imgApiSource = '&source=gbs_api';

        return `${booksUrl}${imageId}${imgTokenVar}${imageToken}${imgApiSource}`;
    }

    render() {
        const { book: {id, title, imageId, imgToken, author, shelf}, shelves, moveBook } = this.props;
        return (
            <li>
                <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.createImgUrl(imageId, imgToken)})` }}></div>
                    <div className="book-shelf-changer">
                    <ShelfChanger bookId={id} shelf={shelf} shelves={shelves} moveBook={moveBook} />
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{author}</div>
                </div>
            </li>
        )
    }
}

export default Book;