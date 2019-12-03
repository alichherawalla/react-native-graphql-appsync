/*
 *
 * EditEmployeeDetailsScreen reducer
 *
 */
import produce from 'immer'
import { fromJS } from 'immutable'
import { createActions } from 'reduxsauce'

export const initialState = fromJS({})

export const {
  Types: EditEmployeeDetailsScreenTypes,
  Creators: EditEmployeeDetailsScreenCreators
} = createActions({
  requestNewEmployee: ['employee'],
  successNewEmployee: ['employeeData'],
  failureNewEmployee: ['employeeDataError'],
  requestUpdateEmployee: ['employee'],
  successUpdateEmployee: ['employeeData'],
  failureUpdateEmployee: ['employeeDataError']
})

/* eslint-disable default-case, no-param-reassign */
export const editEmployeeDetailsScreenReducer = (
  state = initialState,
  action
) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case EditEmployeeDetailsScreenTypes.SUCCESS_NEW_EMPLOYEE:
        return state.set('employeeData', action.employeeData)
      case EditEmployeeDetailsScreenTypes.SUCCESS_UPDATE_EMPLOYEE:
        return state.set('employeeData', action.employeeData)
      default:
        return state
    }
  })

export default editEmployeeDetailsScreenReducer
