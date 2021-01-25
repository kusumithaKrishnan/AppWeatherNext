import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from '../../store'

const WithProvider = (Component) => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Component />
            </PersistGate>
        </Provider>
    )
}

export default WithProvider