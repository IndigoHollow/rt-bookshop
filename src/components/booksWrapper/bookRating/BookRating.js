import React from 'react';
import styled from 'styled-components';
import { withState, compose, pure } from 'recompose';

const Rating = styled.div`
  display: -webkit-flex;
  -webkit-justify-content: space-between;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 100px;
  margin: 7px 0 0;
`;

const Star = styled.div`
  color: ${props => props.checked ? '#ffd700' : '#ababab'};
  cursor: pointer;
  &:hover {
    color: #ffd700;
  }
`;

const BookRating = ({ratingLocal, setRatingLocal, rating, setRating}) => {
  const handleStarClick = index => {
    if (window.location.pathname === '/edit-book') {
      setRatingLocal(index + 1);
      setRating(index + 1);
    }
  }

  const renderStars = () => (new Array(5)).fill(true).map((x, i) => (<Star className="fa fa-star" checked={i < (ratingLocal || rating)} onClick={() => handleStarClick(i)} key={i} />));

  return (
    <Rating className="rating">{renderStars()}</Rating>
  );
}

export default compose(pure, withState('ratingLocal', 'setRatingLocal', null))(BookRating);
