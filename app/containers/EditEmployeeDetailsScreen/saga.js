import { call, put, takeLatest } from 'redux-saga/effects'
import get from 'lodash/get'
import { timeout } from 'app/utils'
import { HomeScreenActions } from 'app/containers/HomeScreen/reducer'
import { newAddress, newEmployee } from '../../services/ApiService'
import { EditEmployeeDetailsScreenTypes } from './reducer'

// Individual exports for testing
const { REQUEST_NEW_EMPLOYEE } = EditEmployeeDetailsScreenTypes

export function* createNewEmployee(/* action */) {
  const response = yield call(newEmployee, {
    firstname: 'John',
    lastname: 'Doe'
  })

  // const response = apiResponseGenerator(true, employeeData())
  if (get(response, 'data')) {
    const { data } = response
    yield call(timeout, 1000)

    const response1 = yield call(newAddress, {
      line1: '3026 Dauphine',
      line2: 'St Ste A',
      city: 'New Orleans',
      state: 'LA',
      zipcode: '70117',
      addressEmployeeId: data.createEmployee.id
    })
    yield put(HomeScreenActions.successGetEmployeeData(response1))
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
}
