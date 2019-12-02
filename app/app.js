import React from 'react'
import { Provider } from 'react-redux'
import Amplify from 'aws-amplify'
import { Provider as PaperProvider } from 'react-native-paper'
import { PersistGate } from 'redux-persist/lib/integration/react'
import LanguageProvider from 'app/containers/LanguageProvider'
import createStore from 'app/rootReducer'
import { translationMessages } from './i18n'
import RootScreen from './containers/RootScreen'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)

const { store, persistor } = createStore()

const App = () => (
  <Provider store={store}>
    <LanguageProvider messages={translationMessages}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <RootScreen />
        </PaperProvider>
      </PersistGate>
    </LanguageProvider>
  </Provider>
)

export default App
