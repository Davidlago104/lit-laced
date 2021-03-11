export const postSneaker = (sneakerData) => {

    return (dispatch) => {
        fetch('http://localhost:3000/api/sneakers', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(sneakerData)
        })
        .then(resp => resp.json())
        .then(sneaker => dispatch({type: 'ADD_SNEAKER', payload: sneaker}))
    }
}