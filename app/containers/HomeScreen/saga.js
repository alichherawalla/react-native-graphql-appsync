import { call, put, takeLatest } from 'redux-saga/effects'
import get from 'lodash/get'
import { getEmployees, removeEmployee } from 'app/services/ApiService'
import NavigationService from 'app/services/NavigationService'
import { HomeScreenActions, HomeScreenTypes } from './reducer'

export function* fetchEmployeeData() {
  const response = yield call(getEmployees, 40, 0)
  if (get(response, 'data')) {
    yield put(
      HomeScreenActions.successGetEmployeeData(
        response.data.listEmployees.items
      )
    )
  }
}

export function* deleteEmployee(action) {
  const response = yield call(removeEmployee, action.employee)
  if (get(response, 'data')) {
    NavigationService.navigateAndReset('HomeScreen')
  }
}

export default function* homeScreenSaga() {
  yield takeLatest(HomeScreenTypes.REQUEST_GET_EMPLOYEE_DATA, fetchEmployeeData)
  yield takeLatest(HomeScreenTypes.REQUEST_DELETE_EMPLOYEE, deleteEmployee)
}
