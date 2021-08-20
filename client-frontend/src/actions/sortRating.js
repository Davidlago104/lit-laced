// grab rating
export const sortRating = (sneakerId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/sneakers/${sneakerId}/ratings`)
      .then((resp) => resp.json())
      .then((resp) => dispatch({ type: "SORT_RATING", payload: sneakerId }));
  };
};
