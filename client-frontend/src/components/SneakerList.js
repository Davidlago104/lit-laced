import React from 'react';
import Sneaker from './Sneaker';
import {Route, Link} from 'react-router-dom';

const Sneakers = (props) => {

    return (
      <div class="list">
        <h3 class="">
          <Link to={"/sneakers/new"}>
            <button class="button">Create a Sneaker!</button>
          </Link>
        </h3>
        {props.sneakers.map((sneaker) => (
          <li class="button" key={sneaker.id}>
            <Link to={`/sneakers/${sneaker.id}`}>{sneaker.name}</Link>
          </li>
        ))}
      </div>
    );
}

export default Sneakers

//uses the const sneaker class mutates every sneaker individually along with their id
//then uses Link from react-router-dom to link every sneaker route