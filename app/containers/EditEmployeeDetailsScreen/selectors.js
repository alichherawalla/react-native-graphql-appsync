import { createSelector } from 'reselect'
import { initialState } from './reducer'

/**
 * Direct selector to the EditEmployeeDetailsScreen state domain
 */

const selectEditEmployeeDetailsScreenDomain = state =>
  (state.editEmployeeDetailsScreen || initialState).toJS()

/**
 * Other specific selectors
 */

/**
 * Default selector used by EditEmployeeDetailsScreen
 */

const makeSelectEditEmployeeDetailsScreen = () =>
  createSelector(selectEditEmployeeDetailsScreenDomain, substate => substate)

const selectEmployeeDetails = () =>
  createSelector(
    selectEditEmployeeDetailsScreenDomain,
    substate => substate.employee
  )

export default makeSelectEditEmployeeDetailsScreen

export { selectEditEmployeeDetailsScreenDomain, selectEmployeeDetails }
