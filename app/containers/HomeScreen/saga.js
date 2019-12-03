import { call, put, takeLatest } from 'redux-saga/effects'
import get from 'lodash/get'
import { getEmployees } from 'app/services/ApiService'
import { HomeScreenActions, HomeScreenTypes } from './reducer'

export function* fetchEmployeeData() {
  const response = yield call(getEmployees, 10, 0)
  // const response = apiResponseGenerator(true, employeeData())
  if (get(response, 'data')) {
    const {
      data: {
        listEmployees: { items }
      }
    } = response
    yield put(HomeScreenActions.successGetEmployeeData(items))
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
}
