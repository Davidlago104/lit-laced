
export function fetchSneakers() {
    return (dispatch) => {

        fetch('http://localhost:3000/api/sneakers')
        .then(resp => resp.json())
        .then(data => dispatch({
            type: 'FETCH_SNEAKERS',
            payload: data
        }))
    }
}

// fetches all sneakers from the database and turns the response into JSON 
// Then dispatches to the store

//create logs before dispatch and after to see where the log is called upon in the console
