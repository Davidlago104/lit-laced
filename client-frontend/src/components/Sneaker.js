import React from 'react';
import {Redirect} from 'react-router-dom';
import RatingContainer from '../containers/RatingContainer';
import {Link} from "react-router-dom";

const Sneaker = (props) => {
    
    let sneaker = props.sneakers.filter(sneaker => sneaker.id == props.match.params.id)[0]
    
    return (
      <div>
        <Link to={"/sneakers"}>
          <button class="button">All Sneakers</button>
        </Link>
          {sneaker ? <h2>{sneaker.name} - ${sneaker.price}</h2> : null}
        <RatingContainer sneaker={sneaker} />
      </div>
    );
}

export default Sneaker

// grabs sneakers from database and uses sneaker ? sneaker: null to display the 
// sneaker in case the first time round the sneaker appears null
// created RatingContainer to grab sneaker props' rating