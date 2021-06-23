//create the props from sneakerlist, to create another functional component that
import React from 'react';
import { Route, Link } from "react-router-dom";
import Sneaker from "./Sneaker";

class SneakerListItem extends React.Component {

  //create a initial state set to 0
  state = {
    likes: 0,
    show: true
  }

  handleClick = () => {
    this.setState({ likes: this.state.likes + 1})
  }

  showLike = () => {
    this.setState({show: !this.state.show})
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
        {this.state.show ? <h2>{this.state.likes}</h2> : ""}
        </div>
      </li>
    );
    }
}
// we should see a like button, but the like button should see 0, everytime its been liked it should be incremented by
// 1 and every refresh it should reset.

export default SneakerListItem;