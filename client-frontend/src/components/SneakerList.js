import React from 'react';

const Sneakers = (props) => {

    return (
        <div>
            {props.sneakers.map(sneaker => <li key={sneaker.id}>{sneaker.name} - ${sneaker.price}</li>)}
        </div>
    )
}

export default Sneakers