import React from 'react';
import RatingInput from '../components/RatingInput';
import Rating from '../components/Rating';
import sneakerReducer from '../reducers/sneakerReducer';
class RatingContainer extends React.Component {

    render() {
        return (
            <div>
                <RatingInput/>
                {/* <Rating ratings={this.props.sneaker.ratings}/> */}
            </div>
        )
    }
}

export default RatingContainer
