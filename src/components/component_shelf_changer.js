import _ from 'lodash'
import React, { Component } from 'react';

export default class ShelfChanger extends Component {
    
    renderOption(shelf) {
        return (
            <option key={shelf.shelfKey} value={shelf.shelfKey}>{shelf.shelfTitle}</option>
        )
    }
    
    handleSubmit = (e) => {
        if(this.props.moveBook) {
            this.props.moveBook(e.target.value, this.props.bookId);
        }
    }
    
    render() {
        return (
            <select value={this.props.shelf} onChange={this.handleSubmit}>
                <option value="moveto" disabled>Move to...</option>
                {_.map(this.props.shelves, this.renderOption.bind(this))}
                <option value="none">None</option>
            </select>
        )
    }
}