export const deleteRating = (ratingId, sneakerId) => {
    console.log(sneakerId)
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/sneakers/${sneakerId}/ratings/${ratingId}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(resp => dispatch({type: 'DELETE_RATING', payload: ratingId}))
    }
}