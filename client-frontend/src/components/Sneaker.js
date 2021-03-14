import React from 'react';

const Sneaker = (props) => {
    let sneaker = props.sneakers[props.match.params.id - 1]

    console.log(sneaker)
    return(
       <li>
           {sneaker ? sneaker.name : null} - ${sneaker ? sneaker.price: null}
       </li>
    )
}

export default Sneaker