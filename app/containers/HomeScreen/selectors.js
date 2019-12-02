import { createSelector } from 'reselect'
import get from 'lodash/get'
import { initialState } from './reducer'

export const selectExampleDomain = state =>
  (state.homeScreen || initialState).toJS()

export const selectEmployeeData = () =>
  createSelector(selectExampleDomain, substate =>
    get(substate, 'employeeData', null)
  )

export const selectLoadingEmployeeData = () =>
  createSelector(selectExampleDomain, substate =>
    get(substate, 'loadingEmployeeData', null)
  )

export const selectEmployeeDataError = () =>
  createSelector(selectExampleDomain, substate =>
    get(substate, 'employeeDataError', null)
  )
