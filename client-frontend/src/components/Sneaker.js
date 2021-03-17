import React from 'react';
import {Redirect} from 'react-router-dom';

const Sneaker = (props) => {
    let sneaker = props.sneakers[props.match.params.id - 1]

    return(
       <div>
           {sneaker ? sneaker.name : null} - ${sneaker ? sneaker.price: null}
       </div>
    )
}

export default Sneaker