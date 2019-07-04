import React from 'react';

import './BookRating.css';

export default class BookRating extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: null,
    }
  }

  renderStars = () => (new Array(5)).fill(true).map((x, i) => (<div onClick={() => this.handleStarClick(i)} className={`fa fa-star ${i < (this.state.rating || this.props.rating) ? 'checked' : ''}`} key={i} />));

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
      <div className="rating">{this.renderStars()}</div>
    );
  }
}
