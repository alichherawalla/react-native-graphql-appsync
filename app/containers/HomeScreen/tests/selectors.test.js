import { fromJS } from 'immutable'
import {
  selectEmployeeData,
  selectLoadingEmployeeData,
  selectEmployeeDataError
} from '../selectors'

describe('selectExample', () => {
  let mockedState
  let employeeData
  let loadingEmployeeData
  let employeeDataError

  beforeEach(() => {
    employeeData = {}
    loadingEmployeeData = true
    employeeDataError = null

    mockedState = {
      homeScreen: fromJS({
        employeeData,
        loadingEmployeeData,
        employeeDataError
      })
    }
  })

  it('should select the user state', () => {
    const userSelector = selectEmployeeData()
    expect(userSelector(mockedState)).toEqual(employeeData)
  })

  it('should select userIsLoading', () => {
    const userIsLoadingSelector = selectLoadingEmployeeData()
    expect(userIsLoadingSelector(mockedState)).toEqual(loadingEmployeeData)
  })

  it('should select the userErrorMessage', () => {
    const userErrorMessageSelector = selectEmployeeDataError()
    expect(userErrorMessageSelector(mockedState)).toEqual(employeeDataError)
  })
})
