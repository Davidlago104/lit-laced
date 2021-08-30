//create the props from sneakerlist, to create another functional component that
import React from 'react';
import { Route, Link } from "react-router-dom";
import Sneaker from "./Sneaker";

class SneakerListItem extends React.Component {


  state = {
    likes: 0
  }

  handleClick = () => {
    this.setState({ likes: this.state.likes + 1})
  }

  render() {
    return (
      <li className="button" key={this.props.sneakers.id}>
        <Link to={`/sneakers/${this.props.sneakers.id}`}>
          {this.props.sneakers.name}
        </Link>
        <br />
        <button className="button" onClick={this.handleClick}>
          Like
        </button>
        <div className="likes">
        <h2>{this.state.likes}</h2> 
        </div>
      </li> 
    );
    }
}

export default SneakerListItem;

