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
    }
}