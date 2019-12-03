import { createActions } from 'reduxsauce'
import { fromJS } from 'immutable'
import produce from 'immer'

export const {
  Types: HomeScreenTypes,
  Creators: HomeScreenActions
} = createActions({
  // dispatch an action to make an API request to fetch the employee data
  requestGetEmployeeData: [],
  successGetEmployeeData: ['employeeData'],
  failureGetEmployeeData: [],
  requestDeleteEmployee: ['employee'],
  successDeleteEmployee: [],
  failureDeleteEmployee: []
})

export const initialState = fromJS({
  employeeData: {},
  loadingEmployeeData: true,
  employeeDataError: null
})

export const successGetEmployeeData = (state, { employeeData }) =>
  state
    .set('employeeData', employeeData)
    .set('loadingEmployeeData', false)
    .set('employeeDataError', null)

export const failureGetEmployeeData = (state, { errorMessage }) =>
  state
    .set('employeeData', null)
    .set('loadingEmployeeData', false)
    .set('employeeDataError', errorMessage)

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const homeContainerReducer = (state = initialState, action) =>
  produce(state, () => {
    switch (action.type) {
      case HomeScreenTypes.SUCCESS_GET_EMPLOYEE_DATA:
        return successGetEmployeeData(state, action)
      case HomeScreenTypes.FAILURE_GET_EMPLOYEE_DATA:
        return failureGetEmployeeData(state, action)
      case HomeScreenTypes.SUCCESS_DELETE_EMPLOYEE:
        return successGetEmployeeData(state, action)
      case HomeScreenTypes.FAILURE_DELETE_EMPLOYEE:
        return failureGetEmployeeData(state, action)
      default:
        return state
    }
  })
