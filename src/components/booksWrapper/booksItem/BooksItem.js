import React from 'react';

import './BooksItem.css';
import BookRating from './../bookRating/BookRating';

export default class BooksItem extends React.Component {
  render () {
    return (
      <div className="booksItem">
        <div className="bookImage"><img src={this.props.bookInfo.img} alt="book" /></div>
        <div className="bookInfo">
          <div className="bookTitle">{this.props.bookInfo.title}</div>
          <div className="bookDescription">{this.props.bookInfo.description}</div>
        </div>
        <div className="bookRating">
          Rating:
          <BookRating rating={this.props.bookInfo.rating} />
        </div>
      </div>
    );
  }
}
