import React from 'react';
import  {connect}  from 'react-redux';
import {deleteRating} from '../actions/deleteRating'

const Ratings = (props) => {

    const handleDelete  = (rating) =>  {
        props.deleteRating(rating.id, rating.sneaker_id)
    }

    return (
        <div class="rating">
            <h4>Ratings</h4>
            {props.ratings && props.ratings.map(rating =>
                <div key={rating.id}><br/>
                    Stars: {rating.stars}<br/>
                    Description:<br/>
                    {rating.description}<br/>
                    <button onClick={() => handleDelete(rating)}>Delete</button>
                </div>
            )}
        </div>
    )
}

export default connect(null, {deleteRating})(Ratings)
// grabs the props from rating database and then mutates towards each
// individual sneaker id