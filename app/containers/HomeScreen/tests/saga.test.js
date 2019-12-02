/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */

import { takeLatest } from 'redux-saga/effects'
import homeScreenSaga, { fetchEmployeeData } from '../saga'
import { HomeScreenTypes } from '../reducer'

describe('homeScreenSaga Saga', () => {
  const generator = homeScreenSaga()

  it('should start task to watch for FETCH_USER action', () => {
    expect(generator.next().value).toEqual(
      takeLatest(HomeScreenTypes.REQUEST_GET_EMPLOYEE_DATA, fetchEmployeeData)
    )
  })
})
