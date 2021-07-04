import React from 'react';
import RatingInput from '../components/RatingInput';
import Rating from '../components/Rating';
import sneakerReducer from '../reducers/sneakerReducer';
class RatingContainer extends React.Component {
 constructor(props) {
    super(props)
     this.state = {
         ratings: this.ratings
 }
};

    displayed = () => {
        this.setState(this.display())
    }

    display = () => {
       return this.setState(this.props.sneaker.ratings)
    }
    // componentDidUpdate(prevProps) {
    //     if (this.props.sneaker !== prevProps.sneaker) {
    //         this.setState({ ratings: this.props.sneaker.ratings });
    //         }
    //     }

  handleClick = () => {
     this.setState({ratings: this.props.sneaker.ratings.sort((a, b) => a.stars - b.stars)})
  }
  
//   sortRatings = () => {
    
//       this.setState((prevState) => ({
//         ratings: [...prevState.ratings].sort((a, b) => a.stars - b.stars
//         )}));
//   }

  render() {
      console.log(this.state.ratings)
      return (
      <div>
        <button class="button" onClick={() => this.handleClick()}>Sort by rating!</button>
        <RatingInput sneaker={this.props.sneaker} />
        {/* <Rating ratings={this.props.sneaker && this.state.ratings} /> */}
        <Rating ratings={this.props.sneaker && this.state.ratings} />
      </div>
    );
  }
}

export default RatingContainer

// button uses sort, button should be used to sort the rating by stars

//anti pattern gone, without the props, get rid of refresh
// blog post state vs props
// schedule meeting on concepts of how it was done