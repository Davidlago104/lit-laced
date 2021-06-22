
export default function sneakerReducer(state = {sneakers: []}, action) {

    switch (action.type) {
      case "FETCH_SNEAKERS":
        return { sneakers: action.payload };

      case "ADD_SNEAKER":
        return { ...state, sneakers: [...state.sneakers, action.payload] };

      case "ADD_RATING":
        let sneakers = state.sneakers.map((sneaker) => {
          if (sneaker.id === action.payload.id) {
            return action.payload;
          } else {
            return sneaker
          }
        });
        return { ...state, sneakers: sneakers };

      case 'DELETE_RATING':
        
        let sneakers2 = state.sneakers.map((sneaker) => {
          return sneaker.ratings.filter((rating) => rating.id !== action.payload)
        });

        return { ...state, sneakers: sneakers2 };

      default:
        return state;
    }
}
