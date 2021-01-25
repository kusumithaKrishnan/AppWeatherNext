import { ActionTypes } from '../actions/actions'

const initialState = {
    counter: 0
}

const HomeReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case ActionTypes.ADD:
            return {
                ...state,
                counter: state.counter + 1
            }
        
        default:
            return state
    }
}

export default HomeReducer