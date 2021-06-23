
export const postRatings = (rating, sneakerId) => {

    return (dispatch) => {
      const URL = `http://localhost:3000/api/sneakers/${sneakerId}/ratings`
        fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(rating),
        })
        .then(resp => resp.json())
        .then(rating => dispatch({type: "ADD_RATING", payload: rating}));
    }
}