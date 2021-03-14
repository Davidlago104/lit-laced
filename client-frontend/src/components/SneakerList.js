import React from 'react';
import Sneaker from './Sneaker';
import {Route, Link} from 'react-router-dom';

const Sneakers = (props) => {

    return (
        <div>
            {props.sneakers.map(sneaker => 
                <li key={sneaker.id}>
                    <Link to={`/sneakers/${sneaker.id}`}>{sneaker.name}</Link>
                </li>)}
        </div>
    )
}

export default Sneakers