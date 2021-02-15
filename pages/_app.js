import { Provider } from 'react-redux'
import { useStore } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { wrapper } from '../store'
import Layout from '../src/components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const store = useStore(state => state)
  return (
    <Provider store={store}>
      <PersistGate persistor={store.__persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  )
}

export default wrapper.withRedux(MyApp)
