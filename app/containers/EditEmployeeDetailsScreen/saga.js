import { put, takeLatest } from 'redux-saga/effects'
import get from 'lodash/get'
import { HomeScreenActions } from 'app/containers/HomeScreen/reducer'
import { apiResponseGenerator } from 'app/utils/testUtils'
import { employeeData } from 'app/utils/mockResponse'
import { EditEmployeeDetailsScreenTypes } from './reducer'

// Individual exports for testing
const {
  REQUEST_NEW_EMPLOYEE,
  REQUEST_UPDATE_EMPLOYEE
} = EditEmployeeDetailsScreenTypes

export function* createNewEmployee(action) {
  const newEmployee = { ...action.employee, id: employeeData.length }
  employeeData.push(newEmployee)
  const response = apiResponseGenerator(true, newEmployee)
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

export function* updateEmployee(action) {
  const eIndex = employeeData.findIndex(e => e.id === action.employee.id)
  employeeData[eIndex] = action.employee
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

export default function* EditEmployeeDetailsScreenSaga() {
  yield takeLatest(REQUEST_NEW_EMPLOYEE, createNewEmployee)
  yield takeLatest(REQUEST_UPDATE_EMPLOYEE, updateEmployee)
}
