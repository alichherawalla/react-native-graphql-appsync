import { Provider } from 'react-redux'

import Amplify from 'aws-amplify'
import { Provider as PaperProvider } from 'react-native-paper'
import { PersistGate } from 'redux-persist/lib/integration/react'
import LanguageProvider from 'app/containers/LanguageProvider'
import Rehydrated from 'app/components/Rehydrated'
import { View } from 'react-native'
import createStore from 'app/rootReducer'
import { ApolloProvider } from 'react-apollo'
import React from 'react'
import PropTypes from 'prop-types'
import { client } from 'app/services/ApiService'
import { translationMessages } from './i18n'
import RootScreen from './containers/RootScreen'
import awsconfig from './aws-exports'
import 'cross-fetch/polyfill'

Amplify.configure(awsconfig)

const { store, persistor } = createStore()

function App({ children }) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Rehydrated
          client={client}
          render={({ rehydrated }) => {
            if (rehydrated) {
              return children
            }
            return <View style={{ flex: 1 }} />
          }}
        >
          <LanguageProvider messages={translationMessages}>
            <PersistGate loading={null} persistor={persistor}>
              <PaperProvider>
                <RootScreen />
              </PaperProvider>
            </PersistGate>
          </LanguageProvider>
        </Rehydrated>
      </ApolloProvider>
    </Provider>
  )
}

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default App
