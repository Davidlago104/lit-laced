
export default function sneakerReducer(state = {sneakers: []}, action) {

    switch (action.type) {
        case 'FETCH_SNEAKERS': 
            return {sneakers: action.payload}
        default:
            return state
    }
}