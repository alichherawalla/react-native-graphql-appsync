// import produce from 'immer'
import {
  fileUploadScreenReducer,
  fileUploadScreenTypes,
  initialState
} from '../reducer'

/* eslint-disable default-case, no-param-reassign */
describe('FileUploadScreen reducer tests', () => {
  let state
  beforeEach(() => {
    state = initialState
  })

  it('should return the initial state', () => {
    expect(fileUploadScreenReducer(undefined, {})).toEqual(state)
  })

  it('should return the update the state when an action of type DEFAULT is dispatched', () => {
    state = state.set('somePayload', 'Mohammed Ali Chherawalla')
    const expectedResult = state
    expect(
      fileUploadScreenReducer(state, {
        type: fileUploadScreenTypes.DEFAULT_ACTION,
        somePayload: 'Mohammed Ali Chherawalla'
      })
    ).toEqual(expectedResult)
  })
})
