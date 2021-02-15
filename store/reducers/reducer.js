import { ActionTypes } from '../actions/actions'
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    counter: 0
}

const HomeReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case HYDRATE:
            return {
                ...state,
                ...payload
            };

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