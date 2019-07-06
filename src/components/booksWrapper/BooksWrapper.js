import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import BooksItem from './booksItem/BooksItem';

const BooksListWrapper = styled.div`
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 40px;
  > a {
    text-decoration: none;
    > div {
      flex-basis: 32%;
      margin: 0 25px 30px 0;
    }
    :nth-of-type(3n+3)
      > div {
        margin-right: 0;
      }
  }
  @media(max-width: 1108px) {
    justify-content: center;
    > a {
    :nth-of-type(3n+3)
      > div {
        margin-right: 25px;
      }
    }
  }
`;

export default class BooksWrapper extends React.Component {
  render () {
    return (
      <BooksListWrapper className="booksWrapper">
        {this.props.books && this.props.books.map((book, index) => <Link key={index} to={{
          pathname: '/edit-book',
          state: {
            bookInfo: this.props.books[index],
            status: 'edit'
          }
        }}><BooksItem key={index} bookInfo={this.props.books[index]} editIndex={index} /></Link>)}
      </BooksListWrapper>
    );
  }
}
