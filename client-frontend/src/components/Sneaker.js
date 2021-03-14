import React from 'react';

const Sneaker = (props) => {
    let sneaker = props.sneakers[props.match.params.id - 1]

    console.log(props)
    return(
       <div>
           {sneaker ? sneaker.name : null} - ${sneaker ? sneaker.price: null}
       </div>
    )
}

export default Sneaker