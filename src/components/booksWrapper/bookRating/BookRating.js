import React from 'react';
import styled from 'styled-components';

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

export default class BookRating extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: null,
    }
  }

  renderStars = () => (new Array(5)).fill(true).map((x, i) => (<Star className="fa fa-star" checked={i < (this.state.rating || this.props.rating)} onClick={() => this.handleStarClick(i)} key={i} />));

  handleStarClick = index => {
    window.location.pathname === '/edit-book'
    && (
      this.setState({
        rating: index + 1,
      }, this.props.setRating(index + 1))
    );
  }

  render () {
    return (
      <Rating className="rating">{this.renderStars()}</Rating>
    );
  }
}
