import { call, put, takeLatest } from 'redux-saga/effects'
import get from 'lodash/get'
import uuid from 'uuid'
import {
  newAddress,
  newEmployee,
  newSkills,
  putAddress,
  putEmployee,
  putSkill
} from 'app/services/ApiService'
import { EditEmployeeDetailsScreenTypes } from './reducer'
import NavigationService from '../../services/NavigationService'
import { HomeScreenActions } from '../HomeScreen/reducer'

// Individual exports for testing
const {
  REQUEST_NEW_EMPLOYEE,
  REQUEST_UPDATE_EMPLOYEE
} = EditEmployeeDetailsScreenTypes

export function* createNewEmployee(action) {
  const employee = {
    ...action.employee,
    id: uuid()
  }
  const employeeResponse = yield call(newEmployee, employee)
  const addressResponse = yield call(newAddress, {
    ...action.employee.address.items[0],
    id: uuid(),
    addressEmployeeId: employee.id
  })
  const skillsResponse = yield call(newSkills, {
    ...action.employee.skills.items[0],
    id: uuid(),
    skillEmployeeId: employee.id
  })
  console.log({
    employeeResponse,
    addressResponse,
    skillsResponse
  })
  if (
    get(employeeResponse, 'data') &&
    get(addressResponse, 'data') &&
    get(skillsResponse, 'data')
  ) {
    yield put(HomeScreenActions.addEmployeeData(employee))
    NavigationService.navigate('HomeScreen')
  }
}

export function* updateEmployee(action) {
  const employeeResponse = yield call(putEmployee, action.employee)
  const address = get(action.employee, 'address.items', [])
  for (let i = 0; i < address.length; i++) {
    yield call(putAddress, {
      ...address[i],
      addressEmployeeId: action.employee.id
    })
  }
  const skills = get(action.employee, 'skills.items', [])
  for (let i = 0; i < address.length; i++) {
    yield call(putSkill, {
      ...skills[i],
      skillEmployeeId: action.employee.id
    })
  }
  if (get(employeeResponse, 'data')) {
    yield put(HomeScreenActions.updateEmployeeData(action.employee))
    NavigationService.navigate('HomeScreen')
  }
}

export default function* EditEmployeeDetailsScreenSaga() {
  yield takeLatest(REQUEST_NEW_EMPLOYEE, createNewEmployee)
  yield takeLatest(REQUEST_UPDATE_EMPLOYEE, updateEmployee)
}
