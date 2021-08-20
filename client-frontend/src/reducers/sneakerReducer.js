
export default function sneakerReducer(state = {sneakers: []}, action) {

    switch (action.type) {
      case "FETCH_SNEAKERS":
        return { sneakers: action.payload };

      case "ADD_SNEAKER":
        return { ...state, sneakers: [...state.sneakers, action.payload] };

      case "ADD_RATING":
        const sneakers = state.sneakers.map((sneaker) => {
          if (sneaker.id === action.payload.id) {
            return action.payload;
          } else {
            return sneaker
          }
        });
        return { ...state, sneakers: sneakers };

      case 'DELETE_RATING':
        
        let sneakers2 = state.sneakers.map((sneaker) => {
          sneaker.ratings = sneaker.ratings.filter((rating) => rating.id !== action.payload)
          return sneaker
        });

        return { ...state, sneakers: sneakers2 };

      case 'SORT_RATING':
          const sortRatings = state.sneakers.map((sneaker)=>{
            sneaker.ratings.sort((a,b) => a.stars - b.stars && action.payload)
            return sneaker
          })
          
          return {...state, sneakers: sortRatings}

      default:
        return state;
    }
}
