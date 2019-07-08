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

const BooksWrapper = ({books}) => {
  return (
    <BooksListWrapper className="booksWrapper">
      {books && books.map((book, index) => <Link key={index} to={{
        pathname: '/edit-book',
        state: {
          bookInfo: books[index],
          status: 'edit'
        }
      }}><BooksItem key={index} bookInfo={books[index]} editIndex={index} /></Link>)}
    </BooksListWrapper>
  );
}

export default BooksWrapper;
