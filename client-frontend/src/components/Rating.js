import React from 'react';

const Ratings = (props) => {

    return (
        <div class="rating">
            <h4>Ratings</h4>
            {props.ratings && props.ratings.map(rating =>
                <div key={rating.id}><br/>
                    Stars: {rating.stars}<br/>
                    Description:<br/>
                    {rating.description}
                </div>
            )}
        </div>
    )
}

export default Ratings
// grabs the props from rating database and then mutates towards each
// individual sneaker id