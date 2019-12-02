import { all, call, takeLatest } from 'redux-saga/effects'
import NavigationService from 'app/services/NavigationService'

import { timeout } from 'app/utils'
import { AppTypes } from './reducer'

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */

export function* startup() {
  yield call(timeout, 1000)
  NavigationService.navigateAndReset('HomeScreen')
}

export default function* startUpSaga() {
  yield all([takeLatest(AppTypes.STARTUP, startup)])
}
