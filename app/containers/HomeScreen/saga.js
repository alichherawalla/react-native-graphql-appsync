import { put, takeLatest } from 'redux-saga/effects'
import get from 'lodash/get'
import { apiResponseGenerator } from 'app/utils/testUtils'
import { employeeData } from 'app/utils/mockResponse'
import { HomeScreenActions, HomeScreenTypes } from './reducer'

export function* fetchEmployeeData() {
  // const response = yield call(getEmployees, 10, 0)
  const response = apiResponseGenerator(true, employeeData)
  if (get(response, 'data')) {
    const { data } = response
    yield put(HomeScreenActions.successGetEmployeeData(data))
  } else {
    yield put(
      HomeScreenActions.failureGetEmployeeData(
        'There was an error while fetching employee information.'
      )
    )
  }
}

export function* deleteEmployee(action) {
  const eIndex = employeeData.findIndex(e => e.id === action.employee.id)
  employeeData.splice(eIndex, 1)
  const response = apiResponseGenerator(true, eIndex)
  if (get(response, 'data')) {
    yield put(HomeScreenActions.successGetEmployeeData(employeeData))
  } else {
    yield put(
      HomeScreenActions.failureGetEmployeeData(
        'There was an error while fetching employee information.'
      )
    )
  }
}

export default function* homeScreenSaga() {
  yield takeLatest(HomeScreenTypes.REQUEST_GET_EMPLOYEE_DATA, fetchEmployeeData)
  yield takeLatest(HomeScreenTypes.REQUEST_DELETE_EMPLOYEE, deleteEmployee)
}
