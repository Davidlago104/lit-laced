import React from 'react';
import Sneaker from './Sneaker'

const Sneakers = (props) => {

    return (
        <div>
            {props.sneakers.map(sneaker => <div key={sneaker.id}><Sneaker sneaker={sneaker}/></div>)}
        </div>
    )
}

export default Sneakers