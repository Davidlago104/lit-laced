import React from 'react';
import Sneaker from './Sneaker';
import {Route, Link} from 'react-router-dom';
import SneakerListItem from '../components/SneakerListItem';


class Sneakers extends React.Component {
  
  render (){
    return (

      <div class="list">
        <h3 class="">
          <Link to={"/sneakers/new"}>
            <button class="button">Create a Sneaker!</button>
          </Link>
        </h3>
        {this.props.sneakers.map((sneaker) => (
          <SneakerListItem sneakers = {sneaker} /> 
        ))
            }
      </div>
      )
    ;
    }
}

export default Sneakers

//search bar, as typing out it should re-render, should re render the letters