import React from 'react';
import {Redirect} from 'react-router-dom';
import RatingContainer from '../containers/RatingContainer';

const Sneaker = (props) => {
    let sneaker = props.sneakers[props.match.params.id - 1]

    console.log(sneaker)

    return(
       <div>
           <h3>
            {sneaker ? sneaker.name : null} - ${sneaker ? sneaker.price: null}
           </h3>
           <RatingContainer sneaker={sneaker}/>
       </div>
    )
}

export default Sneaker

// grabs sneakers from database and uses sneaker ? sneaker: null to display the 
// sneaker in case the first time round the sneaker appears null
// created RatingContainer to grab sneaker props' rating