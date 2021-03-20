import React from 'react';

const Ratings = (props) => {

    return (
        <div>
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