import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/saga'
import rootReducer from './rootReducer'

const persistConfig = {
    key: 'root',
    storage,
}
const sagaMiddleware = createSagaMiddleware()


const persistedReducer = persistReducer(persistConfig, rootReducer)

const invokeMiddleware = () => (
    process.env.NODE_ENV !== "production"
        ? composeWithDevTools(applyMiddleware(sagaMiddleware))
        : applyMiddleware(sagaMiddleware)
)

export const store = createStore(persistedReducer, invokeMiddleware())
sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store)