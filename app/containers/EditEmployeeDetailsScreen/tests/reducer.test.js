// import produce from 'immer'
import {
  editEmployeeDetailsScreenReducer,
  EditEmployeeDetailsScreenTypes,
  initialState
} from '../reducer'

/* eslint-disable default-case, no-param-reassign */
describe('EditEmployeeDetailsScreen reducer tests', () => {
  let state
  beforeEach(() => {
    state = initialState
  })

  it('should return the initial state', () => {
    expect(editEmployeeDetailsScreenReducer(undefined, {})).toEqual(state)
  })

  it('should return the update the state when an action of type DEFAULT is dispatched', () => {
    state = state.set('somePayload', 'Mohammed Ali Chherawalla')
    const expectedResult = state
    expect(
      editEmployeeDetailsScreenReducer(state, {
        type: EditEmployeeDetailsScreenTypes.DEFAULT_ACTION,
        somePayload: 'Mohammed Ali Chherawalla'
      })
    ).toEqual(expectedResult)
  })
})
