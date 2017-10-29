import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './component_shelf'

export default class ShelfList extends Component {
    renderShelf(shelfConfig, key) {
        const { shelves, books, moveBook } = this.props;
        return (
            <Shelf key={key} shelf={shelfConfig} shelves={shelves} books={books} moveBook={moveBook}/>
        )
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                <div>
                    {_.map(this.props.shelves, (shelfConfig, shelfKey)=> {
                        return this.renderShelf(shelfConfig, shelfKey)
                    })}
                </div>
                </div>
                <div className="open-search">
                    <Link to="/search" >Add a Book</Link>
                </div>
            </div>
        )
    }
}