/**
 * Test EditEmployeeDetailsScreen sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeLatest } from 'redux-saga/effects'
import EditEmployeeDetailsScreenSaga, { createNewEmployee } from '../saga'
import { EditEmployeeDetailsScreenTypes } from '../reducer'

describe('EditEmployeeDetailsScreen saga tests', () => {
  const generator = EditEmployeeDetailsScreenSaga()

  it('should start task to watch for REQUEST_NEW_EMPLOYEE action', () => {
    expect(generator.next().value).toEqual(
      takeLatest(
        EditEmployeeDetailsScreenTypes.REQUEST_NEW_EMPLOYEE,
        createNewEmployee
      )
    )
  })
})
