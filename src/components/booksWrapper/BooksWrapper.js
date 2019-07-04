import React from 'react';
import { Link } from "react-router-dom";

import './BooksWrapper.css';
import BooksItem from './booksItem/BooksItem';

export default class BooksWrapper extends React.Component {
  render () {
    return (
      <div className="booksWrapper">
        {this.props.books && this.props.books.map((book, index) => <Link key={index} to={{
          pathname: '/edit-book',
          state: {
            bookInfo: this.props.books[index],
            status: 'edit'
          }
        }}><BooksItem key={index} bookInfo={this.props.books[index]} editIndex={index} /></Link>)}
      </div>
    );
  }
}
