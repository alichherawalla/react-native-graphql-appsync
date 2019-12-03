import { homeContainerReducer, initialState } from '../reducer'
// import { someAction } from '../actions'

/* eslint-disable default-case, no-param-reassign */
describe('homeContainerReducer', () => {
  let state
  beforeEach(() => {
    state = initialState
  })

  it('should return the initial state', () => {
    const expectedResult = state
    expect(homeContainerReducer(undefined, {})).toEqual(expectedResult)
  })
})
