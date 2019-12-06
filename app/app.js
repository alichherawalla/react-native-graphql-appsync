import { Provider } from 'react-redux'

import Amplify from 'aws-amplify'
import { Provider as PaperProvider } from 'react-native-paper'
import { PersistGate } from 'redux-persist/lib/integration/react'
import LanguageProvider from 'app/containers/LanguageProvider'
import Rehydrated from 'app/components/Rehydrated'
import { View } from 'react-native'
import createStore from 'app/rootReducer'
import { ApolloProvider } from 'react-apollo'
import AWSAppSyncClient from 'aws-appsync'
import React from 'react'
import PropTypes from 'prop-types'
import { translationMessages } from './i18n'
import RootScreen from './containers/RootScreen'
import awsconfig from './aws-exports'
import 'cross-fetch/polyfill'

Amplify.configure(awsconfig)

const { store, persistor } = createStore()

const client = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: awsconfig.aws_appsync_authenticationType,
    apiKey: awsconfig.aws_appsync_apiKey
  },
  offlineConfig: {
    keyPrefix: 'public'
  }
})
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
