import { applyMiddleware, createStore } from 'redux'
import { createWrapper } from "next-redux-wrapper";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/saga'
import rootReducer from './rootReducer'

const sagaMiddleware = createSagaMiddleware()

const invokeMiddleware = () => (
    process.env.NODE_ENV !== "production"
        ? composeWithDevTools(applyMiddleware(sagaMiddleware))
        : applyMiddleware(sagaMiddleware)
)

const makeStore = ({ isServer }) => {
    if (isServer) {
        const serverState = createStore(rootReducer, invokeMiddleware())
        sagaMiddleware.run(rootSaga)
        return serverState
    } else {
        const persistConfig = {
            key: 'root',
            storage,
        }
        const persistedReducer = persistReducer(persistConfig, rootReducer)
        const store = createStore(persistedReducer, invokeMiddleware())
        sagaMiddleware.run(rootSaga)
        store.__persistor = persistStore(store);
        return store;
    }
}

export const wrapper = createWrapper(makeStore);