import _ from 'lodash'
import React, { Component } from 'react';

export default class ShelfChanger extends Component {
    
    renderOption(shelf) {
        return ( <option key={shelf.shelfKey} value={shelf.shelfKey}>{shelf.shelfTitle}</option> )
    }
    
    handleChange = (e) => {
        if(this.props.moveBook) {
            this.props.moveBook(e.target.value, this.props.book);
        }
    }
    
    render() {
        let {shelf, shelves} = this.props;
        if(!shelf) {
            shelf = 'none';
        }
        return (
            <select value={shelf} onChange={this.handleChange}>
                <option value="moveto" disabled>Move to...</option>
                {_.map(shelves, this.renderOption.bind(this))}
                <option value="none">None</option>
            </select>
        )
    }
}