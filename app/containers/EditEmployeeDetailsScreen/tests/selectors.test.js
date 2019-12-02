import { fromJS } from 'immutable'
import { selectEditEmployeeDetailsScreenDomain } from '../selectors'

describe('EditEmployeeDetailsScreen selector tests', () => {
  let mockedState

  beforeEach(() => {
    mockedState = {
      EditEmployeeDetailsScreen: fromJS({})
    }
  })

  it('should select the user state', () => {
    expect(selectEditEmployeeDetailsScreenDomain(mockedState)).toEqual(
      mockedState.EditEmployeeDetailsScreen.toJS()
    )
  })
})
