import React from 'react';
import RatingInput from '../components/RatingInput';
import { connect } from "react-redux";
import Rating from '../components/Rating';
import sneakerReducer from '../reducers/sneakerReducer';
import { sortRating } from "../actions/sortRating";

class RatingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedSneakers: []
    };
  }

  handleSort = () => {
    this.props.sortRating(this.props.sneaker.id)
  }

  render() {
    return (
      <div>
        <button
          class="button"
          onClick={this.handleSort}>
          Sort by rating!
        </button>
        <RatingInput sneaker={this.props.sneaker} />
        <Rating ratings={this.state.sortedbyRating ? this.state.sortedSneakers : this.props.sneaker.ratings} />
        {/* <Rating ratings={this.props.sneaker.ratings} /> */}
      </div>
    );
  }
}

export default connect(null, {sortRating})(RatingContainer);


// button uses sort, button should be used to sort the rating by stars