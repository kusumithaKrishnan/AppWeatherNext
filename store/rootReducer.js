import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import reducer from './reducers/reducer'

const persistConfig = {
  key: "root",
  storage
};


const rootReducer = combineReducers({
    home: reducer
});


export default rootReducer;