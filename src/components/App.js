import _ from 'lodash';
import React from 'react'
import { Route } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import '../styles/App.css'

import ShelfList from './component_shelf_list'
import BookSearch from './component_book_search'

class BooksApp extends React.Component {
  state = {
    shelves: {
      current: {
        shelfKey: 'current',
        shelfTitle: 'Currently Reading'
      },
      want: {
        shelfKey: 'want',
        shelfTitle: 'Want to Read'
      },
      read: {
        shelfKey: 'read',
        shelfTitle: 'Read'
      }
    },
    books: {
      1 : {
          id: 1,
          title: 'To Kill a Mockingbird',
          imageId: 'PGR2AwAAQBAJ',
          imgToken: 'AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y',
          author: 'Harper Lee',
          shelf: 'current'
      },
      2 : {
          id: 2,
          title: "Ender's Game",
          imageId: 'yDtCuFHXbAYC',
          imgToken: 'AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN',
          author: 'Orson Scott Card',
          shelf: 'current'
      },
      3 : {
          id: 3,
          title: '1776',
          imageId: 'uu1mC6zWNTwC',
          imgToken: 'AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX',
          author: 'David McCullough',
          shelf: 'want'
      },
      4 : {
          id: 4,
          title: "Harry Potter and the Sorcerer's Stone",
          imageId: 'wrOQLV6xB-wC',
          imgToken: 'AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB',
          author: 'J.K. Rowling',
          shelf: 'want'
      },
      5 : {
          id: 5,
          title: 'The Hobbit',
          imageId: 'pD6arNyKyi8C',
          imgToken: 'AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk',
          author: 'J.R.R. Tolkien',
          shelf: 'read'
      },
      6 : {
          id: 6,
          title: "Oh, the Places You'll Go!",
          imageId: '1q_xAwAAQBAJ',
          imgToken: 'AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8',
          author: 'Seuss',
          shelf: 'read'
      },
      7 : {
          id: 7,
          title: 'The Adventures of Tom Sawyer',
          imageId: '32haAAAAMAAJ',
          imgToken: 'AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi',
          author: 'Mark Twain',
          shelf: 'read'
      }
    }
  }

  moveBook(value, bookId) {
    let newBooksState = this.state.books;
    newBooksState[bookId]['shelf'] = value;
    this.setState((state) => ({
      books: newBooksState
    }));
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <BookSearch 
            shelves={this.state.shelves} 
            books={this.state.books} 
            moveBook={this.moveBook.bind(this)} 
          />
        )} />
        <Route exact path="/" render={() => (
          <ShelfList 
            shelves={this.state.shelves} 
            books={this.state.books} 
            moveBook={this.moveBook.bind(this)} 
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
