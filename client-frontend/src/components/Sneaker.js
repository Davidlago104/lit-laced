import React from 'react';

const Sneaker = (props) => {

    return(
        <li>
            {props.sneaker.name} - ${props.sneaker.price}
        </li>
    )

}

export default Sneaker