
export const postRating = (rating, sneakerId) => {

    return (dispatch) => {
        fetch('http://localhost:3000/api/sneakers/${sneakerId}/ratings',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rating)
        })
        .then(resp => resp.json())
        .then(sneaker => dispatch({type: 'ADD_RATING', payload: sneaker}))
    }
}