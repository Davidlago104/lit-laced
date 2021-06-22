export const deleteRating = (ratingId, sneakerId) => {

    return (dispatch) => {
       fetch(`http://localhost:3000/api/sneakers/${sneakerId}/ratings/${ratingId}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(resp => dispatch({type: 'DELETE_RATING', payload: ratingId}))
    }
}