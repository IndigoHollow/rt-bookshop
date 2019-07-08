import React from 'react';
import styled from 'styled-components';

import BookRating from './../bookRating/BookRating';

const ItemWrapper = styled.div`
  width: 350px;
  height: 536px;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  overflow: hidden;
  color: #017bff;
  cursor: pointer;
`;

const BookInfo = styled.div`
  width: 100%;
  height: 99px;
  border-top: 1px solid #d8d8d8;
  padding: 19px 21px 23px;
  box-sizing: border-box;
  text-align: left;
`;

const RatingWrapper = styled(BookInfo)`
  height: 87px;
  font: normal 14px Arial;
  background: #f7f7f7;
`;

const BookTitle = styled.div`
  font: bold 17px Arial;
  margin: 0 0 15px;
`;

const BookImage = styled.div`
  width: 100%;
  height: 350px;
`;

const BookDescription = styled.div`
  font: normal 14px Arial;
`;

const BooksItem = ({bookInfo}) => {
  return (
    <ItemWrapper className="booksItem">
      <BookImage className="bookImage"><img src={bookInfo.img} alt="book" /></BookImage>
      <BookInfo className="bookInfo">
        <BookTitle className="bookTitle">{bookInfo.title}</BookTitle>
        <BookDescription className="bookDescription">{bookInfo.description}</BookDescription>
      </BookInfo>
      <RatingWrapper className="bookRating">
        Rating:
        <BookRating rating={bookInfo.rating} />
      </RatingWrapper>
    </ItemWrapper>
  );
}

export default BooksItem;
