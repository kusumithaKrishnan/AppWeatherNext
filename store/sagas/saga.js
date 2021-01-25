import { takeLatest, put, all } from 'redux-saga/effects'
import { ActionTypes } from '../actions/actions';


export function* increment() {
    console.log("increment saga")
    yield put({
        type: ActionTypes.ADD
    })
} 

export default function* root(){
    yield all([
        takeLatest(ActionTypes.INC_COUNTER, increment)
    ])
}